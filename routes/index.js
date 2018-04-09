const express = require('express');
const firebase = require('firebase');
const auth = require('./middleware/auth');

const router = express.Router();

/* GET Home Page */
router.get('/', auth.isAuthenticated, (req, res, next) => {
  if (req.session.userType === 'admin') {
    res.redirect('/admin');
  }
  res.render('index', { title: 'Dashboard', user: req.user });
});

/* GET Login Page */
router.get('/login', (req, res, next) => {
  if ('userType' in req.session) {
    if (req.session.userType === 'admin') {
      res.redirect('/admin');
    }
    else {
      res.redirect('/');
    }
  }
  res.render('login', { title: 'Smart Management' });
});

/* POST Login Request */
router.post('/login', (req, res, next) => {
  const { email, password } = req.body.user;
  firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
    firebase.firestore().collection('users').doc(user.uid).get().then((doc) => {
      if (doc.exists) {
        req.session.userType = doc.data().type;
        if (req.session.userType === 'admin') {
          res.redirect('/admin');
        }
        else {
          res.redirect('/');
        }
      }
      else {
        console.log('No such user!');
      }
    }).catch((error) => {
      console.log('Error getting document:', error);
    });
  }).catch((error) => {
    console.log('Error code:', error.code);
    console.log('Error Message', error.message);
    res.redirect('/');
  });
});

/* GET Logout Request */
router.get('/logout', (req, res, next) => {
  firebase.auth().signOut().then(() => {
    delete req.session.userType;
    res.redirect('/login');
  }).catch((error) => {
    console.log('Error code:', error.code);
    console.log('Error Message', error.message);
  });
});

module.exports = router;
