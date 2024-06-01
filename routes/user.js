const express = require('express');
const router = express.Router();
const userSchema = require('../models/user');
const corss = require("cors");
const cors = require("./config/cors");

//create user
router.post( '/users/adduser', corss(cors), ( req,res ) => {
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

//get all users
router.get( '/users', ( req,res ) => {
    userSchema
        .find()
        .then( (data) => res.json(data) )
        .catch( (error) => res.json( {message: error} ) );
} );

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