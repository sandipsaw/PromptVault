const express = require('express')
const authRoute = require('../src/routes/auth.route')
const userRoutes = require('../src/routes/user.route')
const fetchUser = require('./routes/fetchuser.route')
const cookieParser = require('cookie-parser');
const cors = require('cors');

const passport = require('passport');
const jwt = require('jsonwebtoken');
const { Strategy: GoogleStrategy } = require('passport-google-oauth20');


const app = express();
app.use(cors({
  origin: 'http://localhost:5174',
  credentials: true
}));

app.use(passport.initialize());

app.use(cookieParser());
app.use(express.json());

app.use('/auth',authRoute);
app.use('/api', userRoutes);
app.use('/',fetchUser)


passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: '/auth/google/callback',
}, (accessToken, refreshToken, profile, done) => {
  // Here, you would typically find or create a user in your database
  // For this example, we'll just return the profile
  return done(null, profile);
}));

// Route to initiate Google OAuth flow
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Callback route that Google will redirect to after authentication
app.get('/auth/google/callback',
  passport.authenticate('google', { session: false }),
  (req, res) => {
    // Generate a JWT for the authenticated user
    const token = jwt.sign({ id: req.user.id, displayName: req.user.displayName }, process.env.JWT_SECRET, { expiresIn: '1h' });
    // Send the token to the client
    res.json({ token });
  }
);


module.exports = app;