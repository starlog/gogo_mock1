const express = require('express');
const router = express.Router();
const enrollController = require('../controllers/enrollController');

/**
 * @swagger
 * /enroll:
 *   post:
 *     summary: Enroll a user in optional phone services
 *     tags: [Enrollment]
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
 *               - paymentType
 *             properties:
 *               name:
 *                 type: string
 *                 description: Full name of the subscriber
 *               dateOfBirth:
 *                 type: string
 *                 description: Date of birth in format yyyymmdd
 *               phoneNumber:
 *                 type: string
 *                 description: Phone number for service enrollment
 *               paymentType:
 *                 type: string
 *                 description: Payment type (one of 후불, 선불, 정지, 미가입)
 *     responses:
 *       200:
 *         description: Service enrollment successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Enrollment successful
 *                 data:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                     dateOfBirth:
 *                       type: string
 *                     phoneNumber:
 *                       type: string
 *                     paymentType:
 *                       type: string
 */
router.post('/', enrollController.enrollUser);

module.exports = router;