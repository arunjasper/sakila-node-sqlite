/* Load Modules */
const express = require('express');
const router = express.Router();

/* Load controller */
const CustomerController = require('../../controller/customerController');
const customerController = new CustomerController();

/**
 * Customer Entity routes
 */
router.get('/:id', function (req, res) {
    customerController.getCustomerById(req, res)
});

router.get('/', function (req, res) {
    customerController.getCustomers(req, res);
});

module.exports = router;