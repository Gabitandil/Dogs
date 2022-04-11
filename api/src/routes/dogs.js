
const { Router } = require('express');
const {getDogs, getByName, getById} = require('../Controllers/apiFunctions')
const { Dog, Temperament } = require('../db')
const router = Router()

router.get('/', async (req, res) => {
    //ruta de localhost = http://localhost:3001/?name= 
    const { name } = req.query;
    
    if (name) {
       // console.log('entre ', name)
        const getName = await  getByName(name)
         res.send(getName)
       

    } else {
        const dogInfo = await getDogs()
        console.log("hola soy /")
        return res.json(dogInfo)
    }
})


router.get('/details/:id', async (req, res )=> { 
    const { id } = req.params
    const dogById = await getById(id)
    console.log('soy details id ', id)
    return res.send(dogById)

})

module.exports = router