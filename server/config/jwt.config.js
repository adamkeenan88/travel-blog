const jwt = require("jsonwebtoken");
const secret = "I can't believe this key is so secret!";

module.exports.authenticate = (req, res, next) => {
  console.log(req.cookies);
  console.log("key", process.env.SECRET_KEY);
  jwt.verify(req.cookies.usertoken, process.env.SECRET_KEY, (err, payload) => {
    if (err) {
      // 401 status code is unauthorized
      res.status(401).json({ verified: false });
    } else {
      console.log("user is authenticated");
      next();
    }
  });
};
