import React from 'react';
import { X, Trash2, ExternalLink } from 'lucide-react';

const WishlistModal = ({ wishlist, onClose, onRemove, onSelectProduct }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">My Wishlist</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {wishlist.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500 text-lg">Your wishlist is empty</p>
              <p className="text-gray-400 mt-2">Add some items to see them here!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {wishlist.map(item => (
                <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-gray-600 text-sm">{item.brand}</p>
                    <p className="text-pink-600 font-bold">₹{item.price.toLocaleString()}</p>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => onSelectProduct(item)}
                      className="flex items-center space-x-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Get Outfit Ideas</span>
                    </button>
                    
                    <button
                      onClick={() => onRemove(item.id)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WishlistModal;
