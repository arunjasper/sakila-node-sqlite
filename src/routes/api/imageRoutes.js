const express = require('express');
const router = express.Router();
const ImageController = require("../../controller/imageController");
const imageController = new ImageController();

router.get('/', function (req, res) {
    imageController.getImage(req, res)
});

module.exports = router;