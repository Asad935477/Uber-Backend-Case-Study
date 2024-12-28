# User Registration Endpoint Documentation

## Endpoint: `/users/register`

### Method: `POST`

### Description:

This endpoint is used to register a new user.

### Request Body:

The request body should be a JSON object containing the following fields:

- `fullname`: An object containing:
  - `firstname` (string, required, minimum length: 3)
  - `lastname` (string, optional, minimum length: 3)
- `email` (string, required, must be a valid email)
- `password` (string, required, minimum length: 6)

Example:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses:

#### Success:

- **Status Code: 201**
- **Body:**
  ```json
  {
    "token": "JWT_TOKEN_HERE",
    "user": {
      "_id": "USER_ID_HERE",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

#### Validation Errors:

- **Status Code: 400**
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "First Name must be atleast 3 characters long...",
        "param": "fullname.firstname",
        "location": "body"
      },
      {
        "msg": "Password Must be atleast 6 character long...",
        "param": "password",
        "location": "body"
      }
    ]
  }
  ```

#### Other Errors:

- **Status Code: 500**
- **Body:**
  ```json
  {
    "message": "Internal Server Error"
  }
  ```
