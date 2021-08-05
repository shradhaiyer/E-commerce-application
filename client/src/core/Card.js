import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import ShowImage from './ShowImage';
import moment from 'moment';
const Card = ({
  product,
  showViewButton = true
}) => {

  const showButton  = () => {
    return  (
      showViewButton ? <button className="btn btn-outline-primary mr-3">View Product</button> : <p></p>
    )
  }

  const showStock = (q) => {
    return q> 0 ? <span className= "badge badge-primary badge-pill">In stock </span> : <span className="badge badge-warning badge-pill"> Out of stock</span>
  }
  
  return ( 
    
    <div className="card ml-4 mt-4">
      <div className="card-header card-header-1 name ">{product.name}</div>
      <div className="card-body">
       <ShowImage item={product} url="product"/>
        <p className="card-p  mt-2">{product.description.substring(0, 100)} </p>
        <p className="card-p black-10">$ {product.price}</p>
        <p className="black-9">Category: {product.category && product.category.name}</p>
        <p className="black-8">Added on {moment(product.createdAt).fromNow()} </p>
        <Link to={`/product/${product._id}`}>{showButton()}</Link>
        <Link to={`/product/${product._id}`}><button className="btn btn-outline-warning">Add to cart</button></Link>
        <br/>
        <br/>
        {showStock(product.quantity)}
      </div>
    </div>
  );
};

export default Card;
