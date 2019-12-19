const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Session = require('../models/Session');

// router.get('/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const user = await User.findById(id);
//     res.send(user);
//   } catch (err) {
//     res.status(404).send({ msg: 'Error making GET to /user', err });
//   }
// });

router.get('/', async (req, res) => {
  try {
    const sessions = await Session.find({});
    res.send(sessions);
  } catch (err) {
    res.status(404).send({ msg: 'Error making GET to /session', err });
  }
});

router.post('/', async (req, res) => {
  try {
    const session = await new Session(req.body);
    await session.save();
    res.send(session);
  } catch (err) {
    res.status(500).send({ msg: 'Error making POST to /session', err });
  }
});

module.exports = router;
