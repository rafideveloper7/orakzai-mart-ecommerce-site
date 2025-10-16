import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    alert('Added to cart!');
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      
      <div className="p-4 hover:bg-black-600">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-xl font-bold text-blue-600 my-2">${product.price}</p>
        
        <div className="flex space-x-2">
          <button 
            onClick={handleAddToCart}
            className="flex-1 bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;