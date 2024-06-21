const express = require('express');
const router = express.Router();
const { User } = require('../models');
const authMiddleware = require('../utils/authMiddleware');

router.get('/profile', authMiddleware, async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user profile' });
  }
});

module.exports = router;