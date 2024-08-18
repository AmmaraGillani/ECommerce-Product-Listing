import React, { useEffect, useState } from 'react'
import { fetchProducts } from '../service/api';
import ProductList from '../components/ProductList';
import Header from '../components/Header';
import FilterBar from '../components/FilterBar';


const ProductListingPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredPrducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [priceFilter, setPriceFilter] = useState([0,1000]);
  const [availabilityFilter, setAvailabilityFilter] = useState('all');
  

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
      let results = products;
      
      if (searchTerm){
        results = results.filter(prduct => 
          products.title && products.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
      
      if (categoryFilter!='all'){
        results = results.filter(product => product.category === categoryFilter);
      }

      if (priceFilter){
        results = results.filter(
          product => product.price >= priceFilter[0] && product.price <= priceFilter[1]
         );
      }

      if (availabilityFilter != 'all'){
        results = results.filter(product =>
          availabilityFilter === 'inStock' ? product.rating.count > 0 : product.rating.count === 0
        );
      }

      
      setFilteredPrducts(results);
    }, [searchTerm, categoryFilter, priceFilter, products]);

return (
   <div>
        
            <Header searchTerm = {searchTerm} setSearchTerm = {setSearchTerm} />
            <FilterBar
              categoryFilter={categoryFilter}
              setCategoryFilter={setCategoryFilter}
              priceFilter={priceFilter}
              setPriceFilter={setPriceFilter}
              availabilityFilter={availabilityFilter}
              setAvailabilityFilter={setAvailabilityFilter}
      />
            <ProductList products={filteredProducts} />
        
   </div>
  );
};

export default ProductListingPage;