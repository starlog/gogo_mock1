const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    paymentType: {
        type: String,
        enum: ['후불', '선불', '정지', '미가입'],
        required: true
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;