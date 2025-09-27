const express = require('express')
const authRoute = require('../src/routes/auth.route')
const userRoutes = require('../src/routes/user.route')
// const cors = require('cors');


const app = express();


// app.use(cors());
app.use(express.json());

app.use('/auth',authRoute);
app.use('/api', userRoutes);


module.exports = app;