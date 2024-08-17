import React from 'react'

const ProductItem = ({product}) => {
  return (

   
  <div className='bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]'>
    <div className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200">      
       <img src={product.image} alt={product.title} className='h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300' />
       <div className='p-3 flex flex-col gap-2 w-full'>
          <p className='truncate text-lg font-semibold text-slate-700'>
            {product.title}
          </p>
          
           <div className="flex items-center">
               <p className="text-lg font-semibold text-black cursor-auto my-3">${product.price}</p>   
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