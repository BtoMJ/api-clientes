const express = require('express');
const router = express.Router();
const userSchema = require('../models/user');

//create user
router.post( '/users/adduser', ( req,res ) => {
    const user = userSchema( {
                    name : req.body.name,
                    age: req.body.age,
                    phone: req.body.phone,
                    email: req.body.email,
                    gender: req.body.gender
                } );
    user
        .save()
        .then( (data) => res.json(data) )
        .catch( (error) => res.json( {message: error} ) );
} );

// get all users
router.get( '/users', ( req,res ) => {
    userSchema
        .find()
        .then( (data) => res.json(data) )
        .catch( (error) => res.json( {message: error} ) );
} );

// router.get('/api', (req, res) => {
//     request(
//       { url: 'https://api-clientes-production-140a.up.railway.app' },
//       (error, response, body) => {
//         if (error || response.statusCode !== 200) {
//           return res.status(500).json({ type: 'error', message: err.message });
//         }
  
//         res.json(JSON.parse(body));
//       }
//     )
//   });

//get a user
router.get( '/users/:id', ( req,res ) => {
    const { id } = req.params;
    userSchema
        .findById( id )
        .then( (data) => res.json(data) )
        .catch( (error) => res.json( {message: error} ) );
} );

//update a user
router.put( '/users/edituser/:id', ( req,res ) => {
    const { id } = req.params;
    const { name, age, email, phone } = req.body;
    userSchema
        .updateOne( { _id: id }, { $set: { name, age, email, phone } } )
        .then( (data) => res.json(data) )
        .catch( (error) => res.json( {message: error} ) );
} );

//delete a user
router.delete( '/users/:id', ( req,res ) => {
    const { id } = req.params;
    userSchema
        .deleteOne( { _id: id } )
        .then( (data) => res.json(data) )
        .catch( (error) => res.json( {message: error} ) );
} );




module.exports = router;