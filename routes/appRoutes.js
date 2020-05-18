const router = require('express').Router()
const { AppDatabase } = require('../models')

router.get('/appDatabse', (req, res) => {
    AppDatabase.find()
        .then(appDatabse => res.json(appDatabse))
        .catch(e => console.error(e))
})

router.post('/appDatabse', (req, res) => {
    AppDatabase.create(req.body)
        .then(item => res.json(item))
        .catch(e => console.error(e))
})

router.put('/appDatabse/:id', (req, res) => {
    AppDatabase.findByIdAndUpdate(req.params.id, req.body)
        .then(() => res.sendStatus(200))
        .catch(e => console.error(e))
})

router.delete('/appDatabse/:id', (req, res) => {
    AppDatabase.findByIdAndDelete(req.params.id)
        .then(() => res.sendStatus(200))
        .catch(e => console.error(e))
})

module.exports = router