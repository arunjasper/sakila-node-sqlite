/**
 * Express Router configuration
 */
const express = require('express');
const cors = require('cors');
const router = express.Router();


// Use the cors middleware to allow all origins
router.use(cors());
/* API routes */
//router.use('/auth', require('./api/authRoutes'))
router.use('/films', require('./api/filmRoutes'));
router.use('/actors', require('./api/actorRoutes'));
router.use('/categories', require('./api/categoryRoutes'));
router.use('/stores', require('./api/storeRoutes'));
router.use('/rentals', require('./api/rentalRoutes'));
router.use('/customers', require('./api/customerRoutes'));
router.use('/image', require('./api/imageRoutes'));

module.exports = router;