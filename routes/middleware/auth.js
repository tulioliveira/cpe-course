/**
 * Authentication Middleware
 */
const firebase = require('firebase');

module.exports = {
  isAuthenticated: (req, res, next) => {
    const user = firebase.auth().currentUser;
    if (user !== null) {
      req.user = user;
      next();
    }
    else {
      res.redirect('/');
    }
  }
};
