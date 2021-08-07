import React, { useState, useEffect } from 'react';
import { emptyCart } from './cartHelpers';
import Card from './Card';
import { isAuthenticated } from '../auth';
import { Link } from 'react-router-dom';



const Checkout = ({ products}) => {





    const getTotal = () => {
        return products.reduce((currentValue, nextValue) => {
            return currentValue + nextValue.count * nextValue.price;
        }, 0);
    };


    return (
        <div>
            <h2>Total: ${getTotal()}</h2>
            {isAuthenticated() ? (
                <Link  to ="/"><button className="btn btn-success">Checkout</button></Link>
            ) : <Link to="/signin"><button className="btn btn-primary">Sign In </button></Link>}
        </div>
    );
};

export default Checkout;
