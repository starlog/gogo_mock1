const enrollService = {
    enrollUser: (enrollmentData) => {
        // Print out request body data
        console.log('Enrollment Request Data:');
        console.log(JSON.stringify(enrollmentData, null, 2));
        
        // Here you would typically handle the enrollment logic,
        // such as saving the user's information to a database.
        // For now, we will just return a success message.
        return {
            success: true,
            message: "Enrollment successful",
            data: enrollmentData
        };
    }
};

module.exports = enrollService;