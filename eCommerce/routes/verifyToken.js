const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const tokenHeader = req.headers.token;
  if(!tokenHeader){
    res.send(401).json("Invalid session token");
  }
  const token = tokenHeader.split(' ')[1];
  jwt.verify(token, process.env.JWT_SEC, (err, user) => {
    if(err) {
      res.status(403).json("Token is invalid");
    }
    req.user = user;
    next();
  })
};

const verifyTokenAndAuthorize = (req, res, next) => {
  verifyToken(req, res, () => {
    if(req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You must be logged in to continue");
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if(req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You must be logged in to continue");
    }
  });
};

module.exports = { verifyToken, verifyTokenAndAuthorize, verifyTokenAndAdmin };
