const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const bodyParser = require('body-parser');
const corConfig = require("./config/cors");
const cors = require("cors");

const app = express();

const port = process.env.PORT || 3001;

// const corsOptions ={
//     origin:'https://abyclientes-production.up.railway.app/', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }


//middleware
app.use( express.json() );
app.use( '/api', userRoutes );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended: 'true'} ) );
app.use(corConfig);
app.use(cors({
    origin: ['https://abyclientes-production.up.railway.app'],
    // origin: ['http:/localhost:5173'],
    methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

mongoose.set('strictQuery', false);

//mongodb connection
mongoose
    .connect( process.env.MONGODB_URI )
    .then( () => console.log( "Connected to MongoDB Atlas" ) )
    .catch( (error)=> console.error( error ) )

app.get('/', ( req, res )=>{
    res.send('Welcome to NODE backend server ');
})

//server configurations
app.listen( 3001, function(){
    console.log('Server Listening Correctly on Port', port);
} )

module.exports = app;