const express = require('express');
const router = express.Router();
const securityRoutes = require('./securityRoutes');
const enrollRoutes = require('./enrollRoutes');
const paymentTypeRoutes = require('./paymentTypeRoutes');

// Mount the routes
router.use('/security', securityRoutes);
router.use('/enroll', enrollRoutes);
router.use('/paymentType', paymentTypeRoutes);

module.exports = router;