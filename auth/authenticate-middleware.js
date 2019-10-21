const jwt = require('jsonwebtoken');
const { secret } = require('./secret');

/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/

module.exports = (req, res, next) => {
  let { authorization } = req.headers;
  jwt.verify(authorization, secret, (err, decodedToken) => {
    if ( err ) {
      res.status(401).json({ you: 'shall not pass!' });
    } else {
      next()
    }
  })
};
