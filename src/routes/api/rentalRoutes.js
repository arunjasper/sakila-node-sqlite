/* Load Modules */
const express = require('express');
const router = express.Router();
/* Load controller */
const RentalController = require('../../controller/rentalController');
const rentalController = new RentalController();
/**
 * Rental Entity routes
 */
router.get('/customer/:id', function (req, res) {
    rentalController.getRentalsByCustomer(req, res);
});
router.get('/:id', function (req, res) {
    rentalController.getRentalById(req, res)
});
router.get('/', function (req, res) {
    rentalController.getRentals(req, res);
});
router.put('/:id', function (req, res) {
    rentalController.update(req, res)
});
router.post('/create', function (req, res) {
    rentalController.create(req, res);
});
router.delete('/:id', function (req, res) {
    rentalController.deleteById(req, res)
});
module.exports = router;