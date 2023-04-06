import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default props => {
    const { removeFromDom } = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + personId)
            .then(res => {
                removeFromDom(productId)
            })
    }
    return (
        <div>
            {props.people.map((product, idx) => {
                return <p key={idx}>
                    <Link to={"/people/" + product._id}>
                        {product.title}, {product.price}, {product.description}
                    </Link>
                    |
                    <button onClick={(e)=>{deleteProduct(product._id)}}>
                        Delete
                    </button>
                </p>
            })}
        </div>
    )
}

