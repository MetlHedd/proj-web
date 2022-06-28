const jwt = require('jsonwebtoken');

export default function checkCookie(cookie: string) {
  try {
    var decoded = jwt.verify(cookie, "SOME_PRIVATE_KEY");

    return decoded;
  } catch(e) {
    return false;
  }

  return true;
}