const User = require('../models/user');
const {errorHandler} = require('../handlers/dbErrorHandler');
const jwt = require('jsonwebtoken'); // used to generate signed token 
const expressJWT = require('express-jwt');
const braintree = require('braintree');
require('dotenv').config();

const gateway = new braintree.BraintreeGateway({
    environment:  braintree.Environment.Sandbox,
    merchantId:   process.env.BRAINTREE_MERCHANT_ID,
    publicKey:    process.env.BRAINTREE_PUBLIC_KEY,
    privateKey:   process.env.BRAINTREE_PRIVATE_KEY
})

exports.generateToken = (req, res) => {

    gateway.clientToken.generate({}, function(err, response) {
        if(err){
            res.status(500).send(err);
            }
        else {
            res.send(response);
        }
    })
}