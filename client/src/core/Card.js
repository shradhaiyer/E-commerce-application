import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import ShowImage from './ShowImage';
import '../styles.css';
const Card = ({
  product
}) => {
  
  return (
    <div className="col-4 mb-3">
        <div className="card ">
        <div className="card-header">{product.name}</div>
        <div className="card-body">
        <ShowImage item ={product} url="product"/>
        <p className="card-p  mt-2">{product.description.substring(0, 100)} </p>
        <p className="card-p black-10">$ {product.price}</p>
        <p className="black-9">Category: {product.category && product.category.name}</p>
        <Link to= "/"><button className="btn btn-outline-primary mr-1">View</button> </Link>
        <Link to= "/"><button className="btn btn-outline-warning">Add to cart</button> </Link>

      </div>
    </div>
    </div>
    
  );
};

export default Card;
