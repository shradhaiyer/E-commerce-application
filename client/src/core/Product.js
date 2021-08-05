import React, {useEffect, useState} from 'react';
import Layout from './Layout';
import { getProducts, read } from './apiCore';
import Card from './Card';
import '../styles.css';
import Search from './Search';

const Product = (props) => {
    const [product, setProduct] = useState({});
    const [error, setError] = useState(false);

    const loadProduct = (productId) => {
        read(productId).then(data => {
            if(data.error) {
                setError(data.error)
            }
            else{
               setProduct(data);
            }
        })
    }

    useEffect(()=>{
        //getting it from the route
        const productId = props.match.params.productId;
        loadProduct(productId);
    }, [])

    return(
        <Layout title={product && product.name} description={product && product.description} className="container">
            
        </Layout>
    )
    
}
export default Product;