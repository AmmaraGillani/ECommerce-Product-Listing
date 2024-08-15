import React from 'react'
import ProductItem from './ProductItem';

const ProductList = ({products}) => {
    if (!Array.isArray(products) || products.length === 0) {
        return <p>No products available.</p>;
    }
    return (
    <div>
        {products.map(product => (
            <ProductItem key = {product.id} product = {product} />
        ))}
    </div>
  )
}

export default ProductList;