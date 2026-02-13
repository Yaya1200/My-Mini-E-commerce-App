import React, { useState } from "react";
import {useDispatch } from "react-redux";
import { addToCart } from "../featchers/cart/cartSlice";
import { useGetSingleProductQuery } from "../featchers/products/productApi";
import { useParams } from "react-router-dom";
function ProductDetailPage() {
  const dispatch = useDispatch();
  const quantity= 1;
  const { productId } = useParams();


 const { data, isLoading, error } = useGetSingleProductQuery(productId);
    if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading products</p>;

  if (!data) {
    return (
      <div className="max-w-7xl mx-auto p-6">
        <p className="text-gray-500">Product not found.</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch(addToCart({ ...data, quantity }));
  };

  return (
    <div className="max-w-7xl mx-auto p-6 md:flex md:gap-8">
    
      <div className="md:w-1/2">
        <img
          src={data.images[0]}
          alt={data.title}
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>

    
      <div className="md:w-1/2 mt-6 md:mt-0 flex flex-col gap-4">
        <h1 className="text-3xl font-bold">{data.title}</h1>

        <p className="text-gray-700">{data.description}</p>

        <p className="text-2xl font-semibold">
          ${ (data.price).toFixed(2) }
        </p>

        <div className="flex items-center gap-2">
          <label htmlFor="quantity" className="font-medium">
            Quantity: 1
          </label>
        </div>

        
        <button
          onClick={handleAddToCart}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition w-36 mt-4"
        >
          Add to Cart
        </button>

     
        <p className="text-sm text-gray-500 mt-2">
          Free shipping on all orders!
        </p>
      </div>
    </div>
  );
}

export default ProductDetailPage;