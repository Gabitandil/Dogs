const axios = require('axios')
const { Dog, Temperament } = require('../db')

async function getDogs() {
    const apiInfo = await getAPiInfo()
    //   const temperaments = await temperamentsDB()
    const temperaments = await temperamentsDB()



    return apiInfo

}

async function fillTemperaments() {
    const getTemperaments = await axios.get('https://api.thedogapi.com/v1/breeds')
    const data = getTemperaments.data
    if (data) {
        let response = data.map((el) => el.temperament)


        // removeString =[]

      



        let responseString = response.toString()

        let test = responseString.split(', ').join(',').split(',')

        // let noEmpty= test.forEach(el => {
        //     if(el !== ''){
        //         test.push(el)
        //      }
        //  })

         //''

        let finalTemperament = [...new Set(test)]
        let final = finalTemperament.toString().trim().split(', ').join(',').split(',')
        let filter = finalTemperament.filter(el=> el.length>1)
         
        return filter


    }
}

async function temperamentsDB() {
    const dataTemperaments = await fillTemperaments()

    if (dataTemperaments.length > 0) {
        // console.log('soyy', dataTemperaments)
        dataTemperaments.map(el => Temperament.findOrCreate({
            where: {
                temperament: el
            }

        }))

    }
    
    
    
}




async function getAPiInfo() {
    const apiInfo = await axios.get('https://api.thedogapi.com/v1/breeds')
    const data = apiInfo.data

    const dbInfo = await Dog.findAll({
        include: {
            model: Temperament,
            attributes: ["temperament"],
            through: {
                atributes: []
            }
        }
    })




    if (data.length > 0) {
        let response = await data.map(el => {
            return {
                name: el.name,
                image: el.image.url,
                temperament: el.temperament,
                weight: el.weight.metric,
                temperament: el.temperament,
                createdInDB: false
            }
        })

        const final = [...dbInfo, response]
        return final

    }




}

async function getByName(name) {
    const apiInfo = await axios.get('https://api.thecatapi.com/v1/breeds/search?q=' + name)


}




module.exports = { getDogs }