const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
// const userRoutes = require('./routes/user');
const bodyParser = require('body-parser');
const corConfig = require("./config/cors");
const cors = require("cors");

const app = express();

const port = process.env.PORT || 3001;


//middleware
app.use( express.json() );
// app.use( '/api', userRoutes );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended: 'true'} ) );
app.use(corConfig);
app.use(cors());

app.get('/api', (req, res) => {
    request(
      { url: 'https://api-clientes-production-140a.up.railway.app/api/users' },
      (error, response, body) => {
        if (error || response.statusCode !== 200) {
          return res.status(500).json({ type: 'error', message: err.message });
        }
  
        res.json(JSON.parse(body));
      }
    )
  });


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