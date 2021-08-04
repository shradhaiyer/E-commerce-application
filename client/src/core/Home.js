import React, {useEffect, useState} from 'react';
import Layout from './Layout';
import { getProducts } from './apiCore';
import Card from './Card';
import '../styles.css';
const Home = () => {
    const [productsBySell, setProductsBySell] = useState([]);
    const [productsByArrival, setProductsByArrival] = useState([]);
    const [error, setError] = useState(false);


    const loadProductsBySell = () => {
         getProducts("sold").then(data => {
              if(data.err) {
                  setError(data.err);
              }
              else {
                setProductsBySell(data)
              }
          }
          );
        
    }

    const loadProductsByArrival = () => {
      return  getProducts("createdAt").then (data => {
            if(data.err) {
                setError(data.err);
            }
            else {
              setProductsByArrival(data)
            }
        }
        );
    }
    useEffect(() => {
        loadProductsByArrival();
        loadProductsBySell();
    }, []);

    return (
        <Layout title="Home Page" description="E-commerce App" className="container">
            <h2 className="mb-4">Best Sellers</h2>
            <div className ="row">
            {productsBySell.map((product, i) => {
                return <Card key = {i} product={product}/>
            })}
            </div>
            
            <hr/>
            <h2 className="mb-4">New Arrivals</h2>
            <div className ="row">
                {productsByArrival.map((product, i) => {
               return <Card key = {i} product={product}/>
            })}</div>
            
            
        </Layout>
    );
}
export default Home;