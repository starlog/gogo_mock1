const express = require('express');
const router = express.Router();
const paymentTypeController = require('../controllers/paymentTypeController');

/**
 * @swagger
 * /paymentType:
 *   post:
 *     summary: Check a customer's payment plan status
 *     tags: [Payment]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - dateOfBirth
 *               - phoneNumber
 *             properties:
 *               name:
 *                 type: string
 *                 description: Full name of the subscriber
 *               dateOfBirth:
 *                 type: string
 *                 description: Date of birth in format yyyymmdd
 *               phoneNumber:
 *                 type: string
 *                 description: Phone number to check payment plan for
 *     responses:
 *       200:
 *         description: Payment plan information retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 paymentType:
 *                   type: string
 *                   description: One of 후불, 선불, 정지, 미가입
 *                   example: 후불
 */
router.post('/', paymentTypeController.checkPaymentType);

module.exports = router;