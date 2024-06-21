const express = require('express');
const router = express.Router();
const { ConnectedApp } = require('../models');
const authMiddleware = require('../utils/authMiddleware');

router.get('/', authMiddleware, async (req, res) => {
  try {
    const apps = await ConnectedApp.findAll({ where: { UserId: req.user.id } });
    res.json(apps);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching connected apps' });
  }
});

module.exports = router;