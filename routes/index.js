const router = require('express').Router()

router.use('/api', require('./appRoutes.js'))

module.exports = router
