require('dotenv').config();
const express = require('express');
const passport = require('passport');
const session = require('express-session');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const connectedAppsRoutes = require('./routes/connectedApps');
const privacyPolicyRoutes = require('./routes/privacyPolicy');
const dataUsageRoutes = require('./routes/dataUsage');
const errorHandler = require('./utils/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/connected-apps', connectedAppsRoutes);
app.use('/api/privacy-policy', privacyPolicyRoutes);
app.use('/api/data-usage', dataUsageRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});