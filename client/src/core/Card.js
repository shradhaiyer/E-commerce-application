import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

const Card = ({
  product,
}) => {
  
  return (
    <div className="card ml-4 mt-4">
      <div className="card-header card-header-1 ">{product.name}</div>
      <div className="card-body">
       
        <p className="card-p  mt-2">{product.description.substring(0, 100)} </p>
        <p className="card-p black-10">$ {product.price}</p>
        <p className="black-9">Category: {product.category && product.category.name}</p>
      </div>
    </div>
  );
};

export default Card;
