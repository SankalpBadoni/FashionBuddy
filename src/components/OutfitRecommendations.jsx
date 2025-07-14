import React from 'react';
import { X, ExternalLink, ShoppingBag, Image } from 'lucide-react';

const OutfitRecommendations = ({ product, recommendations, onClose }) => {
  if (!recommendations) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg max-w-md w-full p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Outfit Recommendations</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <p className="text-gray-500">No outfit recommendations available for this item.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-hidden">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-4 sm:p-6 border-b">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Outfit Recommendations</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-4 sm:p-6 overflow-y-auto max-h-[75vh]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Selected Product */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">Selected Item</h3>
              <div className="flex items-center space-x-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded flex-shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <h4 className="font-semibold text-gray-900 truncate">{product.name}</h4>
                  <p className="text-gray-600 text-sm truncate">{product.brand}</p>
                  <p className="text-pink-600 font-bold">₹{product.price.toLocaleString()}</p>
                </div>
              </div>
            </div>

            {/* Pinterest Inspiration */}
            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-3 text-gray-900 flex items-center">
                <Image className="w-5 h-5 mr-2 text-red-500 flex-shrink-0" />
                <span className="truncate">Pinterest Inspiration</span>
              </h3>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">{recommendations.outfitName}</h4>
                <p className="text-gray-600 text-sm mb-3">
                  Get styling inspiration from this curated Pinterest board
                </p>
                <a
                  href={recommendations.pinterestLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors text-sm"
                >
                  <ExternalLink className="w-4 h-4 flex-shrink-0" />
                  <span>View on Pinterest</span>
                </a>
              </div>
            </div>
          </div>

          {/* Recommended Items */}
          <div className="mt-6 sm:mt-8">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-900">Complete the Look</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {recommendations.recommendedItems.map((item, index) => (
                <div key={index} className="bg-white border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-3">
                    <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center flex-shrink-0">
                      <ShoppingBag className="w-6 h-6 text-gray-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 truncate">{item.name}</h4>
                      <p className="text-pink-600 font-bold">₹{item.price.toLocaleString()}</p>
                      <p className="text-gray-600 text-sm mt-1 line-clamp-2">{item.reason}</p>
                    </div>
                  </div>
                  <button className="w-full mt-3 bg-pink-600 text-white py-2 rounded-md hover:bg-pink-700 transition-colors text-sm">
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Styling Tips */}
          <div className="mt-8 bg-blue-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3 text-gray-900">Styling Tips</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Mix textures and patterns to create visual interest
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Layer pieces for a more dynamic and versatile look
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Choose accessories that complement your outfit's color palette
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Consider the occasion and dress accordingly
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutfitRecommendations;
