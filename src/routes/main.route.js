const express = require('express')
const router = express.Router()

const mainController = require('../controllers/main.controller')

router.get('/:id', (req, res) => {

    mainController.getData(req.params.id).then((result) => {
        res.status(200).send({
            status: "ok",
            data: result
        })
    }).catch((err) => {
        res.status(500).send({
            status: "error"
        })
    })
    
})

module.exports = router