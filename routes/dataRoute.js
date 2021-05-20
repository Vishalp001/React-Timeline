const express = require("express")
const router = express.Router()
const Data = require("../models/userDataModel")

//
router.route("/create").post((req, res) => {
    const name = req.body.name
    const date = req.body.date
    const tag = req.body.tag
    const color = req.body.color
    const url = req.body.url
    const text = req.body.text

    const newData = new Data({
        name,
        date,
        tag,
        color,
        url,
        text,
    });
    newData.save();
})

router.route("/create").get((req, res) => {
    Data.find()
        .then(foundData => res.json(foundData))
})

module.exports = router;