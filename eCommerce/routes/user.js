const router = require('express').Router();
const { reset } = require('nodemon');
const User = require('../models/User');
const { verifyTokenAndAuthorize, verifyTokenAndAdmin } = require('./verifyToken');


router.put('/:id', verifyTokenAndAuthorize, async (req, res) => {
  if(req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASSWORD_SEC).toString();
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, {
      $set:req.body,
    }, { new: true });
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete
router.delete('/:id', verifyTokenAndAuthorize, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET User
router.get('/:id', verifyTokenAndAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.send().json(err);
  }
});

// GET All Users
router.get('/', verifyTokenAndAdmin, async (req, res) => {
  const query = req.query.new;
  try {
    const users = query ?  await User.find().sort({_id: -1}).limit(1) : await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.send().json(err);
  }
});

//User Stats
router.get('/stats', verifyTokenAndAdmin, async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

  try {
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear }}},
      { $project: { month: { $month: "createdAt" }}},
      { $group: {
        _id: "$month",
        total: { $sum: 1 },
      }}
    ]);
  } catch (err) {
    res.status(500).json(err);
  }
  res.status(200).send(data);
});

module.exports = router;
