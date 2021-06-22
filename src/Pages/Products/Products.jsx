import React, { useContext } from 'react';
import { DataContext } from '../../components/Context';
import './Products.css';
import Cim from '../../images/green.jpg';

const Products = () => {
    const value = useContext(DataContext)
    const [products] = value.products
    return (
        <div className="product-full">
        <div className="product-container">
            <div className="product-row">
                {
                    products.map(product => (
                        <div className="product-card">
                            <img src={product.src} alt="" />
                            <div className="card-details">
                                <h2>{product.title}</h2>
                                <p>{product.description}</p>
                                <h3>{product.price}</h3>
                                <button className="card-btn">View</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        </div>
    )
}

export default Products