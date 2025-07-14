export const products = [
  {
    id: 1,
    name: "Classic White Shirt",
    price: 2999,
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=300&h=400&fit=crop",
    category: "Shirts",
    brand: "StyleCo",
    description: "A timeless white shirt perfect for any occasion"
  },
  {
    id: 2,
    name: "Denim Blue Jeans",
    price: 3999,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=400&fit=crop",
    category: "Jeans",
    brand: "DenimHub",
    description: "Comfortable slim-fit denim jeans"
  },
  {
    id: 3,
    name: "White Floral Dress",
    price: 4999,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=300&h=400&fit=crop",
    category: "Dresses",
    brand: "FloralFashion",
    description: "Beautiful white floral dress for special occasions"
  },
  {
    id: 4,
    name: "Black Leather Jacket",
    price: 7999,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=400&fit=crop",
    category: "Jackets",
    brand: "LeatherLux",
    description: "Premium black leather jacket for a bold look"
  },
  {
    id: 5,
    name: "Casual Sneakers",
    price: 5999,
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=300&h=400&fit=crop",
    category: "Shoes",
    brand: "SneakerWorld",
    description: "Comfortable white sneakers for daily wear"
  },
  {
    id: 6,
    name: "Summer Crop Top",
    price: 1999,
    image: "https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?w=300&h=400&fit=crop",
    category: "Tops",
    brand: "SummerStyle",
    description: "Trendy crop top perfect for summer"
  },
  {
    id: 7,
    name: "Formal Blazer",
    price: 8999,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
    category: "Blazers",
    brand: "FormalWear",
    description: "Professional blazer for business meetings"
  },
  {
    id: 8,
    name: "Vintage Sunglasses",
    price: 2499,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=400&fit=crop",
    category: "Accessories",
    brand: "VintageVibes",
    description: "Stylish vintage sunglasses"
  },
  {
    id: 9,
    name: "Black Ankle Boots",
    price: 6999,
    image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=300&h=400&fit=crop",
    category: "Shoes",
    brand: "BootCraft",
    description: "Stylish black ankle boots for every occasion"
  },
  {
    id: 10,
    name: "Silk Scarf",
    price: 1499,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=400&fit=crop",
    category: "Accessories",
    brand: "SilkLux",
    description: "Elegant silk scarf to elevate any outfit"
  },
  {
    id: 11,
    name: "High-waisted Skirt",
    price: 3499,
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a13d24?w=300&h=400&fit=crop",
    category: "Skirts",
    brand: "SkirtStyle",
    description: "Elegant high-waisted skirt for office or evening"
  },
  {
    id: 12,
    name: "Cashmere Sweater",
    price: 9999,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop",
    category: "Sweaters",
    brand: "CashmereComfort",
    description: "Luxurious cashmere sweater for cold weather"
  }
];

export const categories = [
  { 
    id: 1, 
    name: "Women", 
    count: 45,
    subcategories: [
      { name: "Dresses", count: 20 },
      { name: "Tops", count: 18 },
      { name: "Skirts", count: 15 }
    ]
  },
  { 
    id: 2, 
    name: "Men", 
    count: 27,
    subcategories: [
      { name: "Shirts", count: 15 },
      { name: "Blazers", count: 10 }
    ]
  },
  { 
    id: 3, 
    name: "Bottoms", 
    count: 24,
    subcategories: [
      { name: "Jeans", count: 12 }
    ]
  },
  { 
    id: 4, 
    name: "Outerwear", 
    count: 20,
    subcategories: [
      { name: "Jackets", count: 8 },
      { name: "Sweaters", count: 12 }
    ]
  },
  { 
    id: 5, 
    name: "Shoes", 
    count: 25,
    subcategories: []
  },
  { 
    id: 6, 
    name: "Accessories", 
    count: 30,
    subcategories: []
  }
];

export const outfitRecommendations = {
  1: { // Classic White Shirt
    pinterestLink: "https://www.pinterest.com/pin/business-casual-outfit-ideas--123456789/",
    outfitName: "Business Casual Look",
    recommendedItems: [
      { id: 2, name: "Denim Blue Jeans", price: 3999, reason: "Perfect casual bottom" },
      { id: 7, name: "Formal Blazer", price: 8999, reason: "Complete the professional look" },
      { id: 5, name: "Casual Sneakers", price: 5999, reason: "Comfortable footwear" },
      { id: 11, name: "High-waisted Skirt", price: 3499, reason: "Elegant office alternative" }
    ]
  },
  2: { // Denim Blue Jeans
    pinterestLink: "https://www.pinterest.com/pin/casual-denim-outfit-inspiration--987654321/",
    outfitName: "Casual Chic",
    recommendedItems: [
      { id: 1, name: "Classic White Shirt", price: 2999, reason: "Timeless combination" },
      { id: 4, name: "Black Leather Jacket", price: 7999, reason: "Add edge to your look" },
      { id: 5, name: "Casual Sneakers", price: 5999, reason: "Complete the casual vibe" },
      { id: 12, name: "Cashmere Sweater", price: 9999, reason: "Cozy and stylish" }
    ]
  },
  3: { // White Floral Dress
    pinterestLink: "https://www.pinterest.com/pin/visit-for-more-in-2025--16607092371533702/",
    outfitName: "Summer Romance",
    recommendedItems: [
      { id: 8, name: "Vintage Sunglasses", price: 2499, reason: "Perfect summer accessory" },
      { id: 5, name: "Casual Sneakers", price: 5999, reason: "Comfortable for all-day wear" },
      { id: 10, name: "Silk Scarf", price: 1499, reason: "Add elegance to the look" },
      { id: 9, name: "Black Ankle Boots", price: 6999, reason: "Stylish evening option" }
    ]
  },
  4: { // Black Leather Jacket
    pinterestLink: "https://www.pinterest.com/pin/55450639150365002/",
    outfitName: "Edgy Street Style",
    recommendedItems: [
      { id: 2, name: "Denim Blue Jeans", price: 3999, reason: "Classic rock combination" },
      { id: 6, name: "Summer Crop Top", price: 1999, reason: "Show off the jacket" },
      { id: 9, name: "Black Ankle Boots", price: 6999, reason: "Complete the edgy look" },
      { id: 8, name: "Vintage Sunglasses", price: 2499, reason: "Add mysterious appeal" }
    ]
  },
  5: { // Casual Sneakers
    pinterestLink: "https://www.pinterest.com/pin/sneaker-outfit-ideas--321654987/",
    outfitName: "Athleisure Comfort",
    recommendedItems: [
      { id: 2, name: "Denim Blue Jeans", price: 3999, reason: "Versatile bottom" },
      { id: 1, name: "Classic White Shirt", price: 2999, reason: "Clean, fresh look" },
      { id: 12, name: "Cashmere Sweater", price: 9999, reason: "Elevated comfort" }
    ]
  },
  6: { // Summer Crop Top
    pinterestLink: "https://www.pinterest.com/pin/crop-top-styling-ideas--654321789/",
    outfitName: "Festival Ready",
    recommendedItems: [
      { id: 2, name: "Denim Blue Jeans", price: 3999, reason: "Perfect high-waisted match" },
      { id: 8, name: "Vintage Sunglasses", price: 2499, reason: "Complete the festival look" },
      { id: 5, name: "Casual Sneakers", price: 5999, reason: "Comfortable for dancing" },
      { id: 11, name: "High-waisted Skirt", price: 3499, reason: "Alternative bottom option" }
    ]
  },
  7: { // Formal Blazer
    pinterestLink: "https://www.pinterest.com/pin/professional-blazer-outfits--147258369/",
    outfitName: "Power Dressing",
    recommendedItems: [
      { id: 1, name: "Classic White Shirt", price: 2999, reason: "Professional foundation" },
      { id: 11, name: "High-waisted Skirt", price: 3499, reason: "Elegant office wear" },
      { id: 9, name: "Black Ankle Boots", price: 6999, reason: "Professional footwear" },
      { id: 10, name: "Silk Scarf", price: 1499, reason: "Add sophistication" }
    ]
  },
  8: { // Vintage Sunglasses
    pinterestLink: "https://www.pinterest.com/pin/vintage-sunglasses-style--963852741/",
    outfitName: "Vintage Glamour",
    recommendedItems: [
      { id: 3, name: "Red Floral Dress", price: 4999, reason: "Vintage-inspired piece" },
      { id: 10, name: "Silk Scarf", price: 1499, reason: "Classic accessory" },
      { id: 9, name: "Black Ankle Boots", price: 6999, reason: "Timeless footwear" }
    ]
  },
  9: { // Black Ankle Boots
    pinterestLink: "https://www.pinterest.com/pin/ankle-boots-outfit-ideas--789456123/",
    outfitName: "Chic & Versatile",
    recommendedItems: [
      { id: 2, name: "Denim Blue Jeans", price: 3999, reason: "Classic combination" },
      { id: 12, name: "Cashmere Sweater", price: 9999, reason: "Cozy and chic" },
      { id: 4, name: "Black Leather Jacket", price: 7999, reason: "Add edge to the look" },
      { id: 10, name: "Silk Scarf", price: 1499, reason: "Elegant finishing touch" }
    ]
  },
  10: { // Silk Scarf
    pinterestLink: "https://www.pinterest.com/pin/silk-scarf-styling--456123789/",
    outfitName: "Parisian Elegance",
    recommendedItems: [
      { id: 1, name: "Classic White Shirt", price: 2999, reason: "Perfect base for scarf styling" },
      { id: 7, name: "Formal Blazer", price: 8999, reason: "Professional elegance" },
      { id: 9, name: "Black Ankle Boots", price: 6999, reason: "Sophisticated footwear" },
      { id: 11, name: "High-waisted Skirt", price: 3499, reason: "Feminine silhouette" }
    ]
  },
  11: { // High-waisted Skirt
    pinterestLink: "https://www.pinterest.com/pin/high-waisted-skirt-outfits--123789456/",
    outfitName: "Feminine Power",
    recommendedItems: [
      { id: 1, name: "Classic White Shirt", price: 2999, reason: "Classic tucked-in look" },
      { id: 7, name: "Formal Blazer", price: 8999, reason: "Professional styling" },
      { id: 9, name: "Black Ankle Boots", price: 6999, reason: "Perfect heel height" },
      { id: 10, name: "Silk Scarf", price: 1499, reason: "Add sophistication" }
    ]
  },
  12: { // Cashmere Sweater
    pinterestLink: "https://www.pinterest.com/pin/cashmere-sweater-styling--987123456/",
    outfitName: "Luxury Comfort",
    recommendedItems: [
      { id: 2, name: "Denim Blue Jeans", price: 3999, reason: "Comfortable and stylish" },
      { id: 9, name: "Black Ankle Boots", price: 6999, reason: "Elevated casual look" },
      { id: 10, name: "Silk Scarf", price: 1499, reason: "Luxurious layering" },
      { id: 11, name: "High-waisted Skirt", price: 3499, reason: "Elegant alternative" }
    ]
  }
};
