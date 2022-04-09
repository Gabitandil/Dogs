
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
        years
    } = req.body

    let createDog = await Dog.findOrCreate({
        where:{
            name:name,
            height:height,
            weight: weight,
            years: years
        },
       
    })
    res.send(createDog)
    console.log(createDog)
 })

module.exports = router