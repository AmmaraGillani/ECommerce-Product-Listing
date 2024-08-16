import React from 'react'
import ProductItem from './ProductItem';

const ProductList = ({products}) => {
    if (!Array.isArray(products) || products.length === 0) {
        return <p>No products available.</p>;
    }
    return (
        
        <section className=" w-full mx-auto grid grid-cols-5 md:grid-cols-2 lg:grid-cols-5 gap-y-24 gap-x-14 mt-10 mb-5">
        {products.map(product => (
            <ProductItem key = {product.id} product = {product} />
        ))}
    </section>
  )
}

export default ProductList;