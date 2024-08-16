import React from 'react'

const ProductItem = ({product}) => {
  return (

   
  <div className=" w-full mx-auto grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-y-24 gap-x-14 mt-10 mb-5">
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">      
       <img src={product.image} alt={product.title} className="h-80 w-72 object-cover rounded-t-xl"  />
       <div className="px-4 py-3">
           <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
           <p className="text-lg font-bold text-black truncate block capitalize">{product.title}</p>
           <div className="flex items-center">
               <p className="text-lg font-semibold text-black cursor-auto my-3">{product.price}</p>   
           </div>
           <div className="flex items-center">
               <p className="text-gray-400 mr-3 uppercase text-xs line-clamp-2">{product.description}</p>   
           </div>
       </div>
  </div>
</div>



  );
};

export default ProductItem