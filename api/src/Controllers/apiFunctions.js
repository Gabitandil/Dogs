const axios = require('axios')
const { Dog, Temperament } = require('../db')

async function getDogs() {
    const apiInfo = await getAlldogs()
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
        let filter = finalTemperament.filter(el => el.length > 1)

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




async function getAlldogs() {
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
                id: el.id,
                createdInDB: false,
                reference_image_id: el.reference_image_id
            }
        })

        const final = [...dbInfo, response]
        return final

    }




}

async function getByName(name) {

    const findDogs = await axios.get('https://api.thedogapi.com/v1/breeds/')
    const data = findDogs.data
    const getDogByname = []
    data.forEach(el => {
        if (el.name.includes(name.charAt(0).toUpperCase() + name.slice(1))) {
            getDogByname.push(el)
        }
    })

    const findInDB = await Dog.findOne({
        where: { name: name },
        include: {
            model: Temperament,
            attributes: ["temperament"],
            through: {
                attributes: []
            }
        }
    })
    //console.log('find in db:', findInDB)
    if (findInDB) {
        let dogDB = {}
        dogDB = {
            id: findInDB.id,
            name: findInDB.name,
            height: findInDB.height,
            weight: findInDB.weight,
            years: findInDB.years,
            image: findInDB.image,
            temperament: findInDB.temperaments.map(el => el.temperament).join(', ')

        }

        return dogDB
    }

    if (getDogByname.length > 0) {
        console.log('soy getDogByName= ', getDogByname)
        let finalDogName = getDogByname.map(el => {
            return {
                id: el.id,
                name: el.name,
                image: el.image.url,
                height: el.height.metric,
                weight: el.weight.metric,
                years: el.life_span,
                temperament: el.temperament


            }



        })


        return finalDogName



    } else {

        return 'no existe la raza'
    }
}
// if(Array.from(el).includes(id)){
async function getById(id) {
    const getbyId = await axios.get('https://api.thedogapi.com/v1/breeds/')
    const dataId = getbyId.data

    const idData = []

    //console.log('soy data', data )

    dataId.find(el => {
        if (el.id == id)
            idData.push(el)
    })
    //console.log('idData', idData)
    if (idData.length > 0) {
        console.log('entre')
        let final = {}
        final = {
            id: idData[0].id,
            name: idData[0].name,
            image: idData[0].image.url,
            height: idData[0].height.metric,
            weight: idData[0].weight.metric,
            years:  idData[0].life_span,
            temperament: idData[0].temperament,

        }
        
        return final


    }
    



    

}


module.exports = { getDogs, getByName, getById }