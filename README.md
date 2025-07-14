# StyleHub - Fashion E-commerce Website

A modern, responsive fashion e-commerce website built with React.js and Tailwind CSS. StyleHub provides a seamless shopping experience with wishlist functionality and Pinterest-powered outfit recommendations.

## Features

### 🛍️ Core Shopping Experience
- **Product Catalog**: Browse through various fashion categories (Shirts, Jeans, Dresses, Jackets, Shoes, Tops, Blazers, Accessories)
- **Search & Filter**: Find products by name or filter by category
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, intuitive interface with smooth animations

### ❤️ Wishlist & Recommendations
- **Wishlist Management**: Add/remove items from your personal wishlist
- **Pinterest Integration**: Get outfit inspiration from curated Pinterest boards
- **Outfit Recommendations**: Discover complementary items to complete your look
- **Styling Tips**: Professional styling advice for each outfit combination

### 🎨 Design Features
- **Tailwind CSS**: Utility-first styling for consistent, responsive design
- **Lucide Icons**: Beautiful, consistent iconography
- **Hover Effects**: Interactive elements with smooth transitions
- **Mobile-First**: Responsive navigation and optimized mobile experience

## Tech Stack

- **Frontend**: React.js (JavaScript)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Data**: Hardcoded (ready for backend integration)

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd WalmartHack
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/
│   ├── ProductCard.jsx          # Individual product display
│   ├── WishlistModal.jsx        # Wishlist management modal
│   └── OutfitRecommendations.jsx # Pinterest & outfit suggestions
├── data/
│   └── products.js              # Product data and recommendations
├── App.jsx                      # Main application component
├── main.jsx                     # Application entry point
└── index.css                    # Global styles with Tailwind
```

## Key Components

### ProductCard
- Displays product information with image, name, price, and brand
- Add to wishlist functionality
- Responsive design with hover effects

### WishlistModal
- Manages user's wishlist items
- Quick access to outfit recommendations
- Item removal functionality

### OutfitRecommendations
- Pinterest integration for outfit inspiration
- Complementary item suggestions
- Professional styling tips

## Data Structure

### Products
```javascript
{
  id: number,
  name: string,
  price: number,
  image: string,
  category: string,
  brand: string,
  description: string
}
```

### Outfit Recommendations
```javascript
{
  pinterestLink: string,
  outfitName: string,
  recommendedItems: Array<{
    id: number,
    name: string,
    price: number,
    reason: string
  }>
}
```

## Future Enhancements

- [ ] Backend integration with Node.js/Express
- [ ] User authentication and profiles
- [ ] Shopping cart functionality
- [ ] Payment gateway integration
- [ ] Real Pinterest API integration
- [ ] Product reviews and ratings
- [ ] Order management system
- [ ] Admin dashboard

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Unsplash for product images
- Tailwind CSS for the styling framework
- Lucide for the icon library
- React community for excellent documentation and resources+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
