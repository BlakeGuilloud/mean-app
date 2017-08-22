const express = require('express');
const router = express.Router();

const User = require('../models/User.model');

router.get('/', (req, res) => {
  return User.find()
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

router.post('/', (req, res) => {
  return User.create(req.body)
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

router.delete('/:id', (req, res)=> {
  return User.findByIdAndRemove(req.params.id)
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

module.exports = router;