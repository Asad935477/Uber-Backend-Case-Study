# Documentation

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

### Example Response

- `user`(object):

  - `fullname`(object):
    - `firstname` (string, required, minimum length: 3)
    - `lastname` (string, optional, minimum length: 3)
  - `email` (string, required, must be a valid email)
  - `password` (string, required, minimum length: 6)

- `token`(string): JWT token
