import React, { useEffect, useState } from 'react'
import { fetchProducts } from '../service/api';
import ProductList from '../components/ProductList';
import Header from '../components/Header';


const ProductListingPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredPrducts] = useState([]);
    
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

    useEffect(() => {
      const results = products.filter(product => 
        product.title && product.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setFilteredPrducts(results);
    }, [searchTerm, products]);
    

return (
   <div>
        
            <Header searchTerm = {searchTerm} setSearchTerm = {setSearchTerm} />
            <ProductList products={filteredProducts} />
        
   </div>
  );
};

export default ProductListingPage;