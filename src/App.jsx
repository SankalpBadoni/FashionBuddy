import React, { useState } from 'react';
import { Heart, ShoppingBag, Search, Menu, X, ChevronDown, Crown, Star, Sparkles, User } from 'lucide-react';
import { products as importedProducts, outfitRecommendations } from './data/products';

// Mock data for demonstration
const categories = [
  {
    id: 1,
    name: 'Women',
    subcategories: [
      { name: 'Dresses', count: 45 },
      { name: 'Tops', count: 32 },
      { name: 'Bottoms', count: 28 },
      { name: 'Shoes', count: 19 }
    ]
  },
  {
    id: 2,
    name: 'Men',
    subcategories: [
      { name: 'Shirts', count: 38 },
      { name: 'Pants', count: 25 },
      { name: 'Jackets', count: 15 },
      { name: 'Shoes', count: 22 }
    ]
  },
  {
    id: 3,
    name: 'Accessories',
    subcategories: [
      { name: 'Bags', count: 18 },
      { name: 'Jewelry', count: 24 },
      { name: 'Watches', count: 12 }
    ]
  },
  {
    id: 4,
    name: 'Sale',
    subcategories: []
  }
];

// Add missing properties to imported products
const products = importedProducts.map(product => ({
  ...product,
  price: typeof product.price === 'number' ? product.price / 100 : 89.99, // Convert from cents to dollars
  rating: product.rating || (Math.random() * 2 + 3).toFixed(1), // Random rating between 3-5
  isNew: product.isNew !== undefined ? product.isNew : Math.random() > 0.5, // Random isNew if not defined
  image: product.image.replace('w=300&h=400', 'w=400&h=600'), // Update image dimensions
  category: product.category === 'Shirts' || product.category === 'Blazers' || product.category === 'Jackets' ? 'Men' :
           product.category === 'Dresses' || product.category === 'Tops' || product.category === 'Skirts' || product.category === 'Jeans' ? 'Women' :
           'Accessories'
}));

function ProductCard({ product, onAddToWishlist, onGetOutfitIdeas, isInWishlist }) {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div className="aspect-w-3 aspect-h-4 bg-gray-100 relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.isNew && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
            New
          </div>
        )}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => onAddToWishlist(product)}
            className={`p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
              isInWishlist 
                ? 'bg-red-500 text-white' 
                : 'bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white'
            }`}
          >
            <Heart className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-500 ml-2">({product.rating})</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">${product.price}</span>
          <button
            onClick={() => onGetOutfitIdeas(product)}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
          >
            Style Ideas
          </button>
        </div>
      </div>
    </div>
  );
}

function WishlistModal({ wishlist, onClose, onRemove, onSelectProduct }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-800">Your Wishlist</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        <div className="p-6">
          {wishlist.length === 0 ? (
            <div className="text-center py-8">
              <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">Your wishlist is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {wishlist.map(item => (
                <div key={item.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-gray-600">${item.price}</p>
                  </div>
                  <button
                    onClick={() => onRemove(item.id)}
                    className="text-red-500 hover:text-red-700 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function OutfitRecommendations({ product, recommendations, onClose }) {
  // If no recommendations found, show a placeholder
  if (!recommendations) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-y-auto">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800">Style Ideas for {product.name}</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
          
          <div className="p-6">
            <div className="text-center py-8">
              <Sparkles className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">Outfit recommendations coming soon!</p>
              <p className="text-gray-400 text-sm mt-2">We're working on personalized styling suggestions for this item.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-800">Style Ideas for {product.name}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Selected Product */}
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">Selected Item</h3>
              <div className="flex items-center space-x-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{product.name}</h4>
                  <p className="text-gray-600 text-sm">{product.brand}</p>
                  <p className="text-purple-600 font-bold">${product.price}</p>
                </div>
              </div>
            </div>

            {/* Pinterest Inspiration */}
            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-4">
              <h3 className="text-lg font-semibold mb-3 text-gray-900 flex items-center">
                <Sparkles className="w-5 h-5 mr-2 text-red-500" />
                Pinterest Inspiration
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
                  className="inline-flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors text-sm"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>View on Pinterest</span>
                </a>
              </div>
            </div>
          </div>

          {/* Recommended Items */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Complete the Look</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {recommendations.recommendedItems.map((item, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
                      <ShoppingBag className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{item.name}</h4>
                      <p className="text-purple-600 font-bold">${(item.price / 100).toFixed(2)}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{item.reason}</p>
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-sm font-medium">
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [wishlist, setWishlist] = useState([]);
  const [showWishlist, setShowWishlist] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === '' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToWishlist = (product) => {
    if (!wishlist.find(item => item.id === product.id)) {
      setWishlist([...wishlist, product]);
    }
  };

  const getOutfitIdeas = (product) => {
    setSelectedProduct(product);
  };

  const removeFromWishlist = (productId) => {
    setWishlist(wishlist.filter(item => item.id !== productId));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">
                <Crown className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">FashionBuddy</h1>
                {/* <p className="text-xs text-gray-500">Fashion Boutique</p> */}
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              <button
                onClick={() => setSelectedCategory('')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedCategory === '' 
                    ? 'text-purple-600 bg-purple-50' 
                    : 'text-gray-700 hover:text-purple-600 hover:bg-gray-50'
                }`}
              >
                All Items
              </button>
              {categories.map(category => (
                <div 
                  key={category.id}
                  className="relative"
                  onMouseEnter={() => setHoveredCategory(category.id)}
                  onMouseLeave={() => setHoveredCategory(null)}
                >
                  <button
                    onClick={() => setSelectedCategory(category.name)}
                    className={`flex items-center space-x-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category.name 
                        ? 'text-purple-600 bg-purple-50' 
                        : 'text-gray-700 hover:text-purple-600 hover:bg-gray-50'
                    }`}
                  >
                    <span>{category.name}</span>
                    {category.subcategories.length > 0 && (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                  
                  {/* Dropdown Menu */}
                  {hoveredCategory === category.id && category.subcategories.length > 0 && (
                    <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-48">
                      <div className="py-1">
                        {category.subcategories.map((subcategory, index) => (
                          <button
                            key={index}
                            onClick={() => {
                              setSelectedCategory(subcategory.name);
                              setHoveredCategory(null);
                            }}
                            className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                              selectedCategory === subcategory.name 
                                ? 'text-purple-600 bg-purple-50' 
                                : 'text-gray-700 hover:text-purple-600'
                            }`}
                          >
                            {subcategory.name}
                            <span className="text-gray-400 text-xs ml-2">({subcategory.count})</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Search and Actions */}
            <div className="flex items-center space-x-3">
              {/* Search */}
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm w-64"
                />
              </div>
              
              {/* User Account */}
              <button className="p-2 text-gray-600 hover:text-purple-600 hover:bg-gray-50 rounded-lg transition-all duration-200">
                <User className="w-5 h-5" />
              </button>
              
              {/* Wishlist */}
              <button
                onClick={() => setShowWishlist(true)}
                className="relative p-2 text-gray-600 hover:text-purple-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
              >
                <Heart className="w-5 h-5" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                    {wishlist.length}
                  </span>
                )}
              </button>
              
              {/* Cart */}
              <button className="relative p-2 text-gray-600 hover:text-purple-600 hover:bg-gray-50 rounded-lg transition-all duration-200">
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-purple-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                  0
                </span>
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="lg:hidden p-2 text-gray-600 hover:text-purple-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
              >
                {showMobileMenu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {showMobileMenu && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-1">
              {/* Mobile Search */}
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                />
              </div>
              
              <button
                onClick={() => {
                  setSelectedCategory('');
                  setShowMobileMenu(false);
                }}
                className={`block w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedCategory === '' 
                    ? 'text-purple-600 bg-purple-50' 
                    : 'text-gray-700 hover:text-purple-600 hover:bg-gray-50'
                }`}
              >
                All Items
              </button>
              
              {categories.map(category => (
                <div key={category.id} className="space-y-1">
                  <button
                    onClick={() => {
                      setSelectedCategory(category.name);
                      setShowMobileMenu(false);
                    }}
                    className={`block w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category.name 
                        ? 'text-purple-600 bg-purple-50' 
                        : 'text-gray-700 hover:text-purple-600 hover:bg-gray-50'
                    }`}
                  >
                    {category.name}
                  </button>
                  
                  {category.subcategories.map((subcategory, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSelectedCategory(subcategory.name);
                        setShowMobileMenu(false);
                      }}
                      className={`block w-full text-left px-8 py-2 rounded-lg text-sm transition-all duration-200 ${
                        selectedCategory === subcategory.name 
                          ? 'text-purple-600 bg-purple-50' 
                          : 'text-gray-600 hover:text-purple-600 hover:bg-gray-50'
                      }`}
                    >
                      {subcategory.name}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-50 to-pink-50 px-4 py-2 rounded-full border border-purple-200 mb-6">
            <Crown className="w-5 h-5 text-purple-600" />
            <span className="text-purple-600 font-medium text-sm">Exclusive Collection</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Discover Your Perfect Style
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Indulge in fashion curated with elegance. Find exquisite pieces and receive personalized styling recommendations.
          </p>
        </div>

        {/* Category Header */}
        {selectedCategory && (
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              {selectedCategory} Collection
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToWishlist={addToWishlist}
              onGetOutfitIdeas={getOutfitIdeas}
              isInWishlist={wishlist.some(item => item.id === product.id)}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <Sparkles className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No items found matching your criteria.</p>
            <p className="text-gray-400 text-sm mt-2">Try adjusting your search or browse our full collection.</p>
          </div>
        )}
      </main>

      {/* Wishlist Modal */}
      {showWishlist && (
        <WishlistModal
          wishlist={wishlist}
          onClose={() => setShowWishlist(false)}
          onRemove={removeFromWishlist}
          onSelectProduct={setSelectedProduct}
        />
      )}

      {/* Outfit Recommendations */}
      {selectedProduct && (
        <OutfitRecommendations
          product={selectedProduct}
          recommendations={outfitRecommendations[selectedProduct.id]}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}

export default App;