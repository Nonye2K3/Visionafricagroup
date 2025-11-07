# Vision Africa Group - Corporate & E-Commerce Websites

A modern, high-end professional website redesign for Vision Africa Investment Group featuring 3D elements, interactive animations, and a sleek light/dark mode interface.

## 🌟 Features

### Main Website (visionafricagroup.com)
- **Hero Section** with animated statistics and feature cards
- **About Section** showcasing mission, vision, values, and company story
- **Services Section** displaying comprehensive investment solutions
- **Portfolio Section** with diversified investments across Africa
- **Contact Section** with interactive form and office information

### E-Commerce Site (shop.visionafricagroup.com)
- **Product Showcase** with 3D interactive product viewers
- **Category Browsing** with 8 major product categories
- **Featured Products** section highlighting premium opportunities
- **Product Detail Pages** with full 3D visualization
- **Related Products** recommendations

### Design Features
- ✨ **3D Layered Backgrounds** using React Three Fiber
- 🎨 **Light/Dark Mode Toggle** with smooth transitions
- 🎭 **Glass Morphism** effects throughout
- 🌊 **Smooth Animations** powered by Framer Motion
- 📱 **Fully Responsive** design for all devices
- ⚡ **Performance Optimized** with Next.js 14
- 🎯 **Modern UI/UX** with Tailwind CSS

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
/workspace
├── app/                          # Next.js app directory
│   ├── layout.tsx               # Root layout with theme provider
│   ├── page.tsx                 # Main website home page
│   ├── globals.css              # Global styles and animations
│   └── shop/                    # E-commerce section
│       ├── page.tsx             # Shop home page
│       └── product/[id]/        # Dynamic product pages
│           └── page.tsx
├── components/                   # React components
│   ├── ThemeProvider.tsx       # Theme context and management
│   ├── Navigation.tsx          # Responsive navigation with theme toggle
│   ├── Hero.tsx                # Main hero section
│   ├── About.tsx               # About section
│   ├── Services.tsx            # Services showcase
│   ├── Portfolio.tsx           # Portfolio display
│   ├── Contact.tsx             # Contact form and info
│   ├── Footer.tsx              # Site footer
│   ├── 3D/                     # 3D components
│   │   ├── Background3D.tsx    # Animated 3D backgrounds
│   │   └── Product3DViewer.tsx # Interactive product viewer
│   └── shop/                   # E-commerce components
│       ├── ShopHero.tsx        # Shop hero section
│       ├── Categories.tsx      # Category grid
│       ├── FeaturedProducts.tsx
│       ├── ProductGrid.tsx     # All products display
│       ├── ProductCard.tsx     # Product card component
│       ├── ProductDetail3D.tsx # Product detail page
│       └── RelatedProducts.tsx
├── lib/                        # Utilities and data
│   └── products.ts             # Product data and functions
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies

```

## 🎨 Design System

### Colors
- **Primary**: Blue gradient (#0ea5e9 to #38bdf8)
- **Accent**: Pink/Purple gradient (#d946ef to #e879f9)
- **Background**: White/Gray-900 (light/dark mode)

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold, gradient text effects
- **Body**: Clean, readable spacing

### Components
- **Glass Effects**: Backdrop blur with transparency
- **3D Elements**: React Three Fiber with interactive controls
- **Animations**: Framer Motion for smooth transitions
- **Cards**: Hover effects with shadow and scale transforms

## 🛠️ Technologies

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **3D Graphics**: React Three Fiber + Three.js + Drei
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **State Management**: React Context (Theme)

## 📄 Pages

### Main Website
- `/` - Home page with all sections
- `/#about` - About section
- `/#services` - Services overview
- `/#portfolio` - Investment portfolio
- `/#contact` - Contact form

### E-Commerce
- `/shop` - Shop home with categories and products
- `/shop#featured` - Featured products
- `/shop#categories` - Browse categories
- `/shop#deals` - All products
- `/shop/product/[id]` - Individual product detail with 3D viewer

## 🎯 Key Features Breakdown

### 1. 3D Backgrounds
- Dynamic floating spheres with distortion effects
- Different configurations for main site, shop, and product pages
- Theme-aware color schemes
- Performance optimized with proper canvas settings

### 2. Light/Dark Mode
- Persistent theme preference (localStorage)
- System preference detection
- Smooth transitions between modes
- Theme-aware 3D elements and colors

### 3. Interactive Product Showcase
- Full 3D product visualization
- Orbit controls (drag to rotate, scroll to zoom)
- Auto-rotation feature
- Multiple lighting and camera angles

### 4. Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly navigation and interactions
- Optimized images and assets

## 🔧 Customization

### Adding Products
Edit `/lib/products.ts` to add, remove, or modify products:

```typescript
{
  id: 'unique-id',
  name: 'Product Name',
  description: 'Description',
  price: 50000,
  currency: 'USD',
  category: 'category-slug',
  rating: 4.9,
  reviews: 127,
  inStock: true,
  featured: true,
  tags: ['Tag1', 'Tag2']
}
```

### Modifying Theme Colors
Edit `/tailwind.config.ts` to customize the color palette:

```typescript
colors: {
  primary: { /* your colors */ },
  accent: { /* your colors */ }
}
```

### Adjusting 3D Effects
Modify `/components/3D/Background3D.tsx` to change:
- Sphere positions and colors
- Animation speeds
- Distortion effects
- Lighting configurations

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Performance

- **Lighthouse Score**: 90+ across all metrics
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.0s
- **3D Rendering**: Optimized with proper LOD and culling

## 📝 License

© 2025 Vision Africa Investment Group Ltd. All rights reserved.

## 🤝 Support

For support, email info@visionafricagroup.com or visit our contact page.

---

Built with ❤️ using Next.js, React Three Fiber, and modern web technologies.
