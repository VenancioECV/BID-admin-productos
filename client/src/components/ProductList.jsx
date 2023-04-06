import React from 'react'

 const ProductList = (props) => {
    return (
        <div>
      {props.products.map(product => (
        <div key={product._id}>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
    )
}

export default ProductList