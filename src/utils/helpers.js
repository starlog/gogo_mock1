module.exports = {
    generateSecurityCode: () => {
        return Math.floor(100000 + Math.random() * 900000).toString(); // Generates a 6-digit security code
    },
    validatePhoneNumber: (phoneNumber) => {
        const phoneRegex = /^\d{10,15}$/; // Adjust regex as per phone number format
        return phoneRegex.test(phoneNumber);
    },
    formatResponse: (status, message, data = null) => {
        return {
            status,
            message,
            data
        };
    }
};