import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import './Products.css';
import { DataContext } from '../../components/Context';

export class Products extends Component {

    static contextType = DataContext;

    render() {
        const {products} = this.context;
        return (
            <div className="product-full">
            <div className="product-container">
            <div className="product-row">
                {
                    products.map(product => (
                        <div className="product-card" key={product._id}>
                            <Link to = {`/products/${product._id}`} >
                                <img src={product.images} alt="" />
                            </Link>
                            <div className="card-details">
                                <Link to = {`/products/${product._id}`}><h2>{product.title}</h2></Link>
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
}

export default Products
