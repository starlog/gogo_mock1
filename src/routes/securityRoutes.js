const express = require('express');
const router = express.Router();
const securityController = require('../controllers/securityController');

/**
 * @swagger
 * /security:
 *   post:
 *     summary: Send a security code to verify phone ownership
 *     tags: [Security]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - phoneNumber
 *             properties:
 *               phoneNumber:
 *                 type: string
 *                 description: Phone number to send security code to
 *     responses:
 *       200:
 *         description: Security code sent successfully
 */
router.post('/', securityController.sendSecurityCode);

/**
 * @swagger
 * /security/verify:
 *   post:
 *     summary: Verify a security code
 *     tags: [Security]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - phoneNumber
 *               - securityCode
 *             properties:
 *               phoneNumber:
 *                 type: string
 *                 description: Phone number that received the security code
 *               securityCode:
 *                 type: string
 *                 description: Security code to verify
 *     responses:
 *       200:
 *         description: Security code verified successfully
 */
router.post('/verify', securityController.verifySecurityCode);

module.exports = router;