const { Router } = require('express'); // or not Router()
const Tag = require('../models/Tag');

module.exports = Router()
  .post('/', (req, res) => {
    const {
      name,
    } = req.body;

    Tag
      .create({ name })
      .then(createdTag => {
        res.send(createdTag);
      });
  });

//.get;