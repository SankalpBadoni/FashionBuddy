import React from 'react';
import { Heart, ShoppingBag, Sparkles } from 'lucide-react';

const ProductCard = ({ product, onAddToWishlist, onGetOutfitIdeas, isInWishlist }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
        <button
          onClick={() => onAddToWishlist(product)}
          className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-200 ${
            isInWishlist
              ? 'bg-pink-500 text-white'
              : 'bg-white text-gray-600 hover:bg-pink-50 hover:text-pink-500'
          }`}
        >
          <Heart className={`w-5 h-5 ${isInWishlist ? 'fill-current' : ''}`} />
        </button>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900 truncate">
            {product.name}
          </h3>
          <span className="text-sm text-gray-500">{product.brand}</span>
        </div>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mb-3">
          <span className="text-2xl font-bold text-pink-600">
            ₹{product.price.toLocaleString()}
          </span>
        </div>

        <div className="flex space-x-2">
          <button className="flex items-center space-x-2 bg-pink-600 text-white px-3 py-2 rounded-md hover:bg-pink-700 transition-colors duration-200 flex-1">
            <ShoppingBag className="w-4 h-4" />
            <span>Add to Cart</span>
          </button>
          
          <button 
            onClick={() => onGetOutfitIdeas(product)}
            className="flex items-center space-x-2 bg-purple-600 text-white px-3 py-2 rounded-md hover:bg-purple-700 transition-colors duration-200"
          >
            <Sparkles className="w-4 h-4" />
            <span>Style Ideas</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
