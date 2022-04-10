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
    } = req.body

    let createDog = await Dog.create({

        name: name,
        height: height,
        weight: weight,
        years: years


    })

    let temperamentDB = await Temperament.findAll({
        where: { ['temperament']: temperament }
    })

    let fullDog = await createDog.addTemperament(temperamentDB)
    //res.send(fullDog)
    console.log('temperamentDB', temperamentDB)

    res.send(fullDog)

})

module.exports = router