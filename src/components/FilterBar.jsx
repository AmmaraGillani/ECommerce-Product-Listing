import React from 'react';

const FilterBar = ({
  categoryFilter,
  setCategoryFilter,
  priceFilter,
  setPriceFilter,
  availabilityFilter,
  setAvailabilityFilter
}) => {
  return (
    <div className="flex justify-around p-2 mb-5 bg-gray-200 rounded">
      {/* Category Filter */}
      <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)} className='p-2 border border-gray-300 rounded mr-2'>
        <option value="all">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelry</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
      </select>

      {/* Price Range Filter */}
      <div className=''>
        <label>Price Range: </label>
        <input
          type="number"
          value={priceFilter[0]}
          onChange={(e) => setPriceFilter([e.target.value, priceFilter[1]])}
          placeholder="Min"
          className='p-2 border border-gray-300 rounded mr-2'
        />
        <input
          type="number"
          value={priceFilter[1]}
          onChange={(e) => setPriceFilter([priceFilter[0], e.target.value])}
          placeholder="Max"
          className='p-2 border border-gray-300 rounded mr-2'
        />
      </div>

      {/* Availability Filter */}
      <select
        className='p-2 border border-gray-300 rounded'
        value={availabilityFilter}
        onChange={(e) => setAvailabilityFilter(e.target.value)}
      >
        <option value="all">All</option>
        <option value="inStock">In Stock</option>
        <option value="outOfStock">Out of Stock</option>
      </select>
    </div>
  );
};

export default FilterBar;
