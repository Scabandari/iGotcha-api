const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/User');
const { check, validationResult } = require('express-validator');
// const bcrypt = require('bcryptjs');  TODO !!!!!!!!!!

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.send(user);
  } catch (err) {
    res.status(404).send({ msg: 'Error making GET to /user', err });
  }
});

router.post(
  '/register',
  [
    [
      check('username', 'Status is required')
        .not()
        .isEmpty(),
      check('password', 'Password is required')
        .not()
        .isEmpty(),
      check('email', 'Please include a valid email').isEmail()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const user = await new User(req.body);
      await user.save();
      res.send(user);
    } catch (err) {
      res.status(500).send({ msg: 'Error making POST to /user', err });
    }
  }
);

router.post(
  '/login',
  [
    [
      check('username', 'Status is required')
        .not()
        .isEmpty(),
      check('password', 'Password is required')
        .not()
        .isEmpty(),
      check('email', 'Please include a valid email').isEmail()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    console.log(`email: ${email} pwrd: ${password}`);
    const user = await User.findOne({ email });
    if (user.password === password) {
      res.send(user);
    } else {
      res.status(400).send('Something went wrong.');
    }
  }
);

module.exports = router;
