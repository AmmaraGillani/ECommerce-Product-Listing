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
        
            
            <ProductList products={products} />
        
   </div>
  );
};

export default ProductListingPage;