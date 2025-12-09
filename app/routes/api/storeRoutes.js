/* Load Modules */
const express = require('express');
const router = express.Router();

/* Load controller */
const StoreController = require('../../controller/storeController');
const storeController = new StoreController();
/**
 * Store Entity routes
 */
router.get('/:id', function (req, res) {
    storeController.getStoreById(req, res)
});

router.get('/', function (req, res) {
    storeController.getStores(res);
});

module.exports = router;