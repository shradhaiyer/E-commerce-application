import React, { useState, useEffect, Fragment } from 'react'
import { prices } from './fixedPrices';

const RadioBox = () => {
    const [value, setValue] = useState(0);

    const handleChange = () => {

    }
    return prices.map((p,i) => {
        return <div>
            <input type="radio" 
            className="mr-2 ml-4"
            value={`${p._id}`}
            onChange={handleChange()}/>
            <label className="form-check-label">{p.name}</label>
        </div>
    })
}
export default RadioBox;