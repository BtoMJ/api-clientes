const mongoose = require('mongoose');

const userSchema = mongoose.Schema( {
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    payment: {
        type: Number,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }
} );


module.exports = mongoose.model( 'User', userSchema );