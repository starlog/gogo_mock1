# Phone Service API

This project is a Node.js REST API application designed to manage the enrollment of optional phone services called '통화중 대기' and '캐치콜'. The API provides endpoints for sending security codes, verifying phone ownership, enrolling users in services, and checking payment plans.

## Features

- Send security codes to verify phone ownership.
- Verify security codes sent to users.
- Enroll users in optional phone services.
- Check the customer's payment plan status.

## Endpoints

### Security

- **POST /security**
  - Sends a security code to the specified phone number.
  - Request Body:
    ```json
    {
      "phoneNumber": "보안 코드를 전송할 휴대폰 번호"
    }
    ```
  - Response: Always success.

- **POST /security/verify**
  - Verifies the security code sent to the specified phone number.
  - Request Body:
    ```json
    {
      "phoneNumber": "보안 코드를 전송한 휴대폰 번호",
      "securityCode": "전송된 보안코드"
    }
    ```
  - Response: Always success (For testing).

### Enrollment

- **POST /enroll**
  - Handles optional service enrollment.
  - Request Body:
    ```json
    {
      "name": "가입자의 성명",
      "dateOfBirth": "가입자의생년월일, yyyymmdd",
      "phoneNumber": "서비스 가입을 할 휴대폰 전화번호",
      "paymentType": "one of: 후불, 선불, 정지, 미가입"
    }
    ```

### Payment Type

- **POST /paymentType**
  - Checks the customer's payment plan.
  - Request Body:
    ```json
    {
      "name": "가입자의 성명",
      "dateOfBirth": "가입자의생년월일, yyyymmdd",
      "phoneNumber": "서비스 가입을 할 휴대폰 전화번호"
    }
    ```
  - Response: One of 후불, 선불, 정지, 미가입.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd phone-service-api
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your environment variables.

5. Start the server:
   ```
   npm start
   ```

## Usage

You can use tools like Postman or curl to interact with the API endpoints. Make sure to set the appropriate headers and request bodies as specified above.

## License

This project is licensed under the MIT License.# gogo_mock1
