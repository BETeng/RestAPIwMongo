const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');


//Middleware
app.use(cors());
app.use(bodyParser.json());

//Import Routes
const postsRoute = require('./routes/posts')


app.use('/posts', postsRoute);

//Routes
app.get('/', (req, res)=>{
    res.send('we are on home');
});


//Connect to mongoose
mongoose.connect(process.env.DB_connection, { useNewUrlParser: true, useUnifiedTopology: true }, ()=>{
    console.log('connected to DB')
})
app.listen(3000);