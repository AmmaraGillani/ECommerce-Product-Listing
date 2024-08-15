import React from 'react'

const ProductItem = ({product}) => {
  return (
    <div className="">
        <img src={product.image} alt={product.title} className="product-image" />
        <h2 className="">{product.title}</h2>
        <p className="">${product.price}</p>
        <p className="">{product.description}</p>
    </div>
  );
};

export default ProductItem