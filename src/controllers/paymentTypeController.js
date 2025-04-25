const paymentTypeService = require('../services/paymentTypeService');

exports.checkPaymentType = async (req, res) => {
    const { name, dateOfBirth, phoneNumber } = req.body;

    try {
        // Changed to match the method name in paymentTypeService
        const paymentType = await paymentTypeService.checkPaymentPlan(name, dateOfBirth, phoneNumber);
        return res.status(200).json({ paymentType });
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};