
const { Router } = require('express');
const dogs = require('../Controllers/apiFunctions')
const { Dog, Temperament } = require('../db')
const router = Router()

router.get('/', async (req,res)=> {
    const {name} = req.query;
    const dogInfo = await dogs.getDogs()
   console.log("hola soy /")
   return  res.json(dogInfo)
})


 router.post('/create', async(req,res)=> {
    let {
        name,
        height,
        weight,
        years,
        temperament,
    } = req.body

    let createDog = await Dog.create({
        
            name:name,
            height:height,
            weight: weight,
            years: years
        
       
    })

    let temperamentDB= await Temperament.findAll({
    where:{['temperament']:temperament }
    })

    let fullDog = await createDog.addTemperament(temperamentDB)
    //res.send(fullDog)
    console.log('temperamentDB',temperamentDB)
    
    res.send(fullDog)
    
 })

module.exports = router