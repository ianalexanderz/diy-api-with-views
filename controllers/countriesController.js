const router = require('express').Router()

const models = require('../models')

router.get('/', (req, res) => {
  models.country.findAll().then((countries) => {
    res.json({ countries })
  })
})

router.post('/', (req, res) => {
  models.country.create({
    name: req.body.name,
    founded: req.body.founded,
    population: req.body.population
  }).then((country) => {
    res.json({ country })
  })
})



module.exports = router