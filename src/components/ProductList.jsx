import React from 'react'
import ProductItem from './ProductItem';

const ProductList = ({products}) => {
    if (!Array.isArray(products) || products.length === 0) {
        return <p>No products available.</p>;
    }
    return (
        
        <section className=" grid grid-rows-4 grid-flow-col gap-4 w-full mx-auto grid-cols-5 md:grid-cols-2 lg:grid-cols-5 gap-y-8 gap-x-8 mt-10 mb-5">
        {products.map(product => (
            <ProductItem key = {product.id} product = {product} />
        ))}
    </section>
  )
}

export default ProductList;