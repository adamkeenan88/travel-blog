const mongoose = require("mongoose");
const User = require("../model/user.model");

register: (req, res) => {
  User.create(req.body)
    .then((user) => {
      res.json({ msg: "success!", user: user });
    })
    .catch((err) => res.json(err));
};
