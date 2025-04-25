const { body, validationResult } = require('express-validator');

const validateSecurity = [
    body('phoneNumber').isMobilePhone('any').withMessage('Invalid phone number'),
];

const validateSecurityCode = [
    body('phoneNumber').isMobilePhone('any').withMessage('Invalid phone number'),
    body('securityCode').isLength({ min: 6, max: 6 }).withMessage('Security code must be 6 digits'),
];

const validateEnrollment = [
    body('name').notEmpty().withMessage('Name is required'),
    body('dateOfBirth').isDate({ format: 'YYYYMMDD' }).withMessage('Date of birth must be in YYYYMMDD format'),
    body('phoneNumber').isMobilePhone('any').withMessage('Invalid phone number'),
    body('paymentType').isIn(['후불', '선불', '정지', '미가입']).withMessage('Payment type must be one of: 후불, 선불, 정지, 미가입'),
];

const validatePaymentType = [
    body('name').notEmpty().withMessage('Name is required'),
    body('dateOfBirth').isDate({ format: 'YYYYMMDD' }).withMessage('Date of birth must be in YYYYMMDD format'),
    body('phoneNumber').isMobilePhone('any').withMessage('Invalid phone number'),
];

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

module.exports = {
    validateSecurity,
    validateSecurityCode,
    validateEnrollment,
    validatePaymentType,
    validate,
};