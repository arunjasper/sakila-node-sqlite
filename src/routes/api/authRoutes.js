/* Load Modules */
const express = require('express');
const router = express.Router();

/* Load controller */
const AuthController = require('../../controller/authController');
const authController = new AuthController();
/**
 * Actor Entity routes
 */
router.post('/login', function (req, res) {
    authController.login(req, res)
});

router.delete('/logout', function (req, res) {
    authController.logout(req, res)
});

router.post('/register', function (req, res) {
    authController.register(req, res);
});

module.exports = router;