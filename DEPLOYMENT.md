# Deployment Guide

## Quick Deploy to Vercel (Recommended)

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Follow the prompts to configure your project

### Option 2: Deploy via GitHub

1. Push your code to GitHub:
```bash
git add .
git commit -m "Initial commit: Vision Africa Group websites"
git push origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Configure build settings (auto-detected for Next.js)
6. Click "Deploy"

## Environment Variables

No environment variables are required for basic deployment. For production, you may want to add:

```env
# Optional: Analytics
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# Optional: Contact Form Backend
NEXT_PUBLIC_FORM_ENDPOINT=your-form-endpoint

# Optional: Product Images CDN
NEXT_PUBLIC_CDN_URL=your-cdn-url
```

## Custom Domain Setup

### For Main Website (visionafricagroup.com)

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add `visionafricagroup.com` and `www.visionafricagroup.com`
4. Follow DNS configuration instructions

### For E-Commerce (shop.visionafricagroup.com)

#### Option A: Subdomain on Same Deployment
1. Add `shop.visionafricagroup.com` as a domain in Vercel
2. Vercel will automatically route to `/shop` path

#### Option B: Separate Deployment
1. Create a new Vercel project
2. Use the same codebase but modify `next.config.js`:
```javascript
module.exports = {
  basePath: '/shop',
  // other config...
}
```

## DNS Configuration

Add these records to your DNS provider:

### For Apex Domain (visionafricagroup.com)
```
Type: A
Name: @
Value: 76.76.21.21
```

### For WWW Subdomain
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### For Shop Subdomain
```
Type: CNAME
Name: shop
Value: cname.vercel-dns.com
```

## Build Configuration

Vercel will auto-detect these settings:

- **Framework**: Next.js
- **Build Command**: `next build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`
- **Development Command**: `next dev`

## Performance Optimization

### 1. Image Optimization
Images are automatically optimized by Next.js. For external images, add domains to `next.config.js`:

```javascript
images: {
  domains: ['images.unsplash.com', 'your-cdn-domain.com'],
}
```

### 2. Caching Strategy
Vercel automatically handles caching. Static pages are cached at the edge.

### 3. 3D Asset Loading
Consider hosting large 3D models on a CDN:
```typescript
// Use CDN for 3D models
const modelUrl = process.env.NEXT_PUBLIC_CDN_URL + '/models/product.glb'
```

## Alternative Deployment Options

### Deploy to Netlify

1. Connect your GitHub repository
2. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
3. Deploy

### Deploy to AWS Amplify

1. Connect repository
2. Use default Next.js build settings
3. Deploy

### Deploy to Your Own Server

1. Build the application:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

3. Use a process manager like PM2:
```bash
npm i -g pm2
pm2 start npm --name "vision-africa" -- start
pm2 save
```

4. Configure Nginx as reverse proxy:
```nginx
server {
    listen 80;
    server_name visionafricagroup.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Post-Deployment Checklist

- [ ] Test main website on desktop and mobile
- [ ] Test shop on desktop and mobile
- [ ] Verify 3D elements load correctly
- [ ] Test light/dark mode toggle
- [ ] Test all navigation links
- [ ] Test contact form submission
- [ ] Verify product pages load
- [ ] Check 3D product viewer interactions
- [ ] Test on multiple browsers
- [ ] Verify SSL certificate
- [ ] Check page load speeds
- [ ] Test search functionality
- [ ] Verify all images load
- [ ] Check responsive design breakpoints

## Monitoring

### Vercel Analytics
Enable in your Vercel dashboard:
1. Go to your project
2. Click "Analytics" tab
3. Enable Web Analytics

### Google Analytics
Add to `/app/layout.tsx`:
```typescript
import Script from 'next/script'

// Add in return statement
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
  strategy="afterInteractive"
/>
```

## Troubleshooting

### 3D Elements Not Rendering
- Check browser WebGL support
- Verify Three.js dependencies are installed
- Check console for errors

### Build Fails
- Run `npm install` to ensure all dependencies
- Check for TypeScript errors: `npm run lint`
- Verify Node.js version (18+)

### Slow Performance
- Optimize images (use WebP format)
- Reduce 3D geometry complexity
- Enable CDN for static assets
- Check bundle size: `npm run build --analyze`

## Support

For deployment issues:
- Vercel: https://vercel.com/support
- GitHub: Check repository issues
- Email: info@visionafricagroup.com
