import React, {useEffect, useState} from 'react';
import Layout from './Layout';
import { getProducts } from './apiCore';
import Checkbox from './Checkbox';
import RadioBox from './RadioBox';
import { getCategories } from './apiCore';
import { prices } from './fixedPrices';
import '../styles.css';

const Shop = () => {
    const [categories, setCategories] = useState([]);
    const [myFilters, setMyFilters] = useState({
        filters: {
            category:[],
            price: []
        }
    });    
    const [error, setError] = useState(false);

    const loadCategories = () =>  {
        getCategories().then(data => {
            if(data.err) {
                setError(data.err);
            }
            else {
              setCategories(data)
            }
        }
        );
    }

    const handleFilters = (filters, filterBy) => {
        const newFilters = {...myFilters};
        newFilters.filters[filterBy] = filters;
        setMyFilters(newFilters);        
    }

    useEffect(() => {
        loadCategories();
    },[]);

    return (
        <Layout title="Shop" description="Shop for your favourite books" className="container-fluid">
            
            <div className ="row">
                <div className="col-4">
                    <h4>Filter by categories</h4>
                    <ul><Checkbox categories={categories}
                         handleFilters={filters => handleFilters(filters, 'category')}/></ul>   
                    <h4>Filter by Price</h4>
                    <div><RadioBox/></div>   
                </div>
               
                <div className="col-8">
                    {JSON.stringify(myFilters)}
                </div>
            </div>
            
            
        </Layout>
    )
}

export default Shop;