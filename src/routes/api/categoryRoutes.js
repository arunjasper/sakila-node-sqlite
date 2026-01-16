/* Load Modules */
const express = require('express');
const router = express.Router();

/* Load controller */
const CategoryController = require('../../controller/categoryController');
const categoryController = new CategoryController();

/**
 * Category Entity routes
 */
router.get('/:id', function (req, res) {
    categoryController.getCategoryById(req, res)
});

router.get('/', function (req, res) {
    categoryController.getCategories(res);
});

module.exports = router;