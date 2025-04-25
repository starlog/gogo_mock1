const paymentPlans = {
    "후불": "후불",
    "선불": "선불",
    "정지": "정지",
    "미가입": "미가입"
};

const paymentTypeService = {
    checkPaymentPlan: (name, dateOfBirth, phoneNumber) => {
        // Return specific payment type based on name
        switch (name) {
            case '조휘열':
                return '후불';
            case '홍길동':
                return '선불';
            case '박종진':
                return '정지';
            case '김철수':
                return '미가입';
            default:
                // For any other name, return a random payment plan
                const plans = Object.values(paymentPlans);
                const randomPlan = plans[Math.floor(Math.random() * plans.length)];
                return randomPlan;
        }
    }
};

module.exports = paymentTypeService;