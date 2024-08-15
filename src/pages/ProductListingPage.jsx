import React, { useEffect, useState } from 'react'
import { fetchProducts } from '../service/api';
import ProductList from '../components/ProductList';

const ProductListingPage = () => {
  const [products, setProducts] = useState([]);
    
  useEffect(() => {
        const getProducts = async () => {
          try {
            const productList = await fetchProducts();
            setProducts(productList);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };
        getProducts();
    },[]);


return (
   <div>
        
            <h1>Product Listing</h1>
            <ProductList products={products} />
        
   </div>
  );
};

export default ProductListingPage;