const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Comment = require('../models/Comment');

router.get('/', async (req, res) => {
  res.send('working');
});

router.post('/', async (req, res) => {
  const { player, session } = req.body;
  console.log(`req.body: ${JSON.stringify(req.body)}`);
  var playerId = mongoose.Types.ObjectId(player);
  var sessionId = mongoose.Types.ObjectId(session);
  //const comment_ = ;
  //res.send('wro');
  const comment = await new Comment({
    player: playerId,
    session: sessionId,
    comment: req.body.comment
  });
  await comment.save();
  res.send(comment);
});

module.exports = router;
