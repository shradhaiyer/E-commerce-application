import React, {useEffect, useState} from 'react';
import Layout from './Layout';
import { listRelated, read } from './apiCore';
import Card from './Card';
import '../styles.css';
import Search from './Search';

const Product = (props) => {
    const [product, setProduct] = useState({});
    const [relatedProucts, setRelatedProucts] = useState([]);
    const [error, setError] = useState(false);

    const loadProduct = (productId) => {
        read(productId).then(data => {
            if(data.error) {
                setError(data.error)
            }
            else{
               setProduct(data);
               console.log(data)
               listRelated(data._id).then(data => {
                   if(data.error) {
                       setError(data.error);
                   }
                   else{
                       setRelatedProucts(data);
                   }
               })
            }
        })
    }


    useEffect(()=>{
        //getting it from the route
        const productId = props.match.params.productId;
        loadProduct(productId);
    }, [])

    return(
        <Layout 
        title={product && product.name} 
        description={product && product.description} 
        className="container-fluid">
            
            <div className="row">
                <div className="col-8">
                {product && product.description && <Card product={product} showViewButton ={false}/>}
                </div>
                <div className="col-4">
                    <h4>Related Products</h4> 
                    {relatedProucts.map((product, i) => {
                        return(<div className="mb-3" key={i}>
                                    <Card product={product}/>
                                </div>)
                    })}
                </div>
            </div>
        </Layout>
    )
    
}
export default Product;