const express = require('express');
const firebase = require('firebase');
const auth = require('./middleware/auth');

const router = express.Router();

/* GET Admin Home Page */
router.get('/', auth.isAuthenticated, auth.isAdmin, (req, res, next) => {
  res.render('admin/index', { title: 'Admin Dashboard', user: req.user });
});

module.exports = router;
