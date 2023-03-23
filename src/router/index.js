const express = require('express')
const router = express.Router()
const ApiController = require('../controller/ApiController')

router.post('/insert-data', ApiController.insert)
router.get('/get-all', ApiController.get)
router.get('/get-by-id/:id', ApiController.getById)
router.patch('/update/:id', ApiController.updateById)
router.delete('/delete/:id', ApiController.deleteById)

module.exports = router
