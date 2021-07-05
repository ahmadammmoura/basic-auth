'use strict';

const bcrypt = require('bcrypt');
const Users = require('../Models/User.model');

const signUp = async (req, res) => {
  console.log(req.body);

  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const user = new Users(req.body);
    const record = await user.save(req.body);
    res.status(200).json(record);
  } catch (e) {
    res.status(403).send(e);
  }
};

const signIn = (req, res) => {
  res.status(200).json(req.user);
};

module.exports = {
  signUp,
  signIn,
};
