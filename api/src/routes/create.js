const { Router } = require('express');
const router = Router()
const { Dog, Temperament } = require('../db')


router.post('/', async (req, res) => {
    let {
        name,
        height,
        weight,
        years,
        temperament,
        image,
    } = req.body

    let createDog = await Dog.create({

        name: name,
        height: height,
        weight: weight,
        years: years,
        image: image


    })

    let temperamentDB = await Temperament.findAll({
        where: { ['temperament']: temperament }
    })

    concatTemperaments = temperamentDB
    
    
    let fullDog = await createDog.addTemperament(temperamentDB)
    

    res.send(fullDog)

})

module.exports = router