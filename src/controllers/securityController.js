const securityService = require('../services/securityService');

exports.sendSecurityCode = async (req, res) => {
    const { phoneNumber } = req.body;
    // Logic to send security code to the phone number
    await securityService.sendSecurityCode(phoneNumber);
    return res.status(200).json({ message: 'Security code sent successfully.' });
};

exports.verifySecurityCode = async (req, res) => {
    const { phoneNumber, securityCode } = req.body;
    // Logic to verify the security code
    await securityService.verifySecurityCode(phoneNumber, securityCode);
    return res.status(200).json({ message: 'Security code verified successfully.' });
};