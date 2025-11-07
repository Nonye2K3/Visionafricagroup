# Quick Start Guide

## 🚀 Get Started in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 What You'll See

### Main Website (localhost:3000)
- **Hero Section** - Interactive 3D background with company overview
- **About** - Mission, vision, values, and company story
- **Services** - 8 comprehensive investment services
- **Portfolio** - 6 featured investments across Africa
- **Contact** - Interactive contact form

### E-Commerce Site (localhost:3000/shop)
- **Shop Hero** - Search and featured stats
- **Categories** - 8 product categories with icons
- **Featured Products** - Premium investment opportunities
- **Product Grid** - All available products
- **Product Pages** - Individual product details with 3D viewer

## ✨ Key Features to Test

### 1. Light/Dark Mode Toggle
- Click the sun/moon icon in the navigation
- Theme persists across page refreshes
- All 3D elements adapt to theme

### 2. 3D Backgrounds
- Animated floating spheres on every page
- Different configurations for main site vs shop
- Interactive and performant

### 3. Product 3D Viewer
1. Go to `/shop`
2. Click any product
3. Drag to rotate the 3D model
4. Scroll to zoom in/out
5. Watch auto-rotation

### 4. Navigation
- Smooth scroll to sections (main site)
- Mobile-responsive hamburger menu
- Easy switching between main site and shop

### 5. Animations
- Scroll-triggered animations throughout
- Hover effects on cards and buttons
- Smooth transitions everywhere

## 📱 Test Responsive Design

Open DevTools and test these breakpoints:
- **Mobile**: 375px (iPhone SE)
- **Tablet**: 768px (iPad)
- **Desktop**: 1440px (Laptop)
- **Large**: 1920px (Desktop)

## 🎨 Customization Quick Tips

### Change Colors
Edit `/tailwind.config.ts`:
```typescript
primary: {
  500: '#your-color', // Main brand color
}
```

### Add a Product
Edit `/lib/products.ts`:
```typescript
{
  id: 'prod-013',
  name: 'Your Product',
  description: 'Description',
  price: 10000,
  // ... other fields
}
```

### Modify 3D Background
Edit `/components/3D/Background3D.tsx`:
```typescript
// Change sphere positions, colors, or animation speed
{ position: [-4, 2, -8], color: lightColor, speed: 1.5 }
```

### Update Company Info
Edit `/components/Hero.tsx`, `/components/About.tsx`, etc.

## 🛠️ Available Commands

```bash
# Development
npm run dev          # Start dev server (port 3000)

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## 📂 Important Files

```
Key files to customize:
├── app/page.tsx                 # Main homepage
├── app/shop/page.tsx           # Shop homepage
├── components/Hero.tsx         # Hero content
├── components/About.tsx        # About content
├── components/Services.tsx     # Services content
├── lib/products.ts             # Product data
└── tailwind.config.ts          # Theme colors
```

## 🎯 Next Steps

1. **Customize Content**: Update text, images, and company info
2. **Add Real Products**: Replace sample products with real data
3. **Connect Backend**: Integrate contact form with email service
4. **Add Analytics**: Set up Google Analytics
5. **Deploy**: Follow `DEPLOYMENT.md` to go live

## ⚡ Performance Tips

- Images are auto-optimized by Next.js
- 3D elements use efficient rendering
- Code splitting happens automatically
- Static pages are pre-rendered

## 🐛 Troubleshooting

### 3D not showing?
- Check browser supports WebGL
- Try Chrome/Firefox/Safari (latest versions)
- Clear cache and reload

### Styles not loading?
```bash
rm -rf .next
npm run dev
```

### TypeScript errors?
```bash
npm install --save-dev @types/node @types/react @types/three
```

## 📞 Need Help?

- Check `README.md` for detailed documentation
- See `DEPLOYMENT.md` for deployment guides
- Review code comments in components

## 🎉 You're Ready!

Your modern, 3D-enhanced website is ready to customize and deploy!

**Pro Tip**: Start by updating the company information in the Hero and About sections, then customize colors in the Tailwind config.

Happy building! 🚀
