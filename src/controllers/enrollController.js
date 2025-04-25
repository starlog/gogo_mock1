const enrollService = require('../services/enrollService');

exports.enrollUser = async (req, res) => {
    const { name, dateOfBirth, phoneNumber, paymentType } = req.body;

    try {
        // Call the enroll service to handle the enrollment logic
        await enrollService.enrollUser({ name, dateOfBirth, phoneNumber, paymentType });
        
        // Return success response
        return res.status(200).json({ message: 'Enrollment successful' });
    } catch (error) {
        // Handle errors and return appropriate response
        return res.status(500).json({ message: 'Enrollment failed', error: error.message });
    }
};