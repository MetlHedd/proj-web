const jwt = require('jsonwebtoken');

export default function generateCookie(email: string, admin: boolean) {
  const token = jwt.sign({ email, admin }, "SOME_PRIVATE_KEY");

  return token;
}