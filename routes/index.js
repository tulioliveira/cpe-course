const express = require('express');
const firebase = require('firebase');
const auth = require('./middleware/auth');

const router = express.Router();

/* GET Home Page */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Smart Management' });
});

/* Login Request */
router.post('/login', (req, res, next) => {
  const { email, password } = req.body.user;
  firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
    console.log(user);
    firebase.firestore().collection('users').doc(user.uid).get().then((doc) => {
      if (doc.exists) {
        req.session.userType = doc.data().type;
        firebase.auth().signOut().then(() => {
          res.redirect('/');
        }).catch((error) => {
          console.log('Error code:', error.code);
          console.log('Error Message', error.message);
        });
      }
      else {
        console.log('No such document!');
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

module.exports = router;
