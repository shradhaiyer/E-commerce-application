import React from 'react';
import { API } from '../config';

const  ShowImage = ({item,url}) => {

    return (
        <div className="product-img">
            <img src={`${API}/${url}/photo/${item._id}`} 
            className="mb-3"
            alt={item.name}
            style = {{maxHeight: '100px', maxWidth: '100px'}} ></img>
        </div>
    )
}
export default ShowImage;