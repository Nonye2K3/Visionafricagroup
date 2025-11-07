#!/bin/bash

echo "🚀 Vision Africa Group - Deployment Script"
echo "=========================================="
echo ""
echo "This will deploy your website to Vercel!"
echo ""

# Check if vercel is installed
if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
fi

echo "✅ Vercel CLI is ready!"
echo ""
echo "🔐 Please login to Vercel in your browser..."
echo ""

# Login to Vercel
vercel login

echo ""
echo "🚀 Deploying to production..."
echo ""

# Deploy
cd /workspace
vercel --prod

echo ""
echo "🎉 Deployment complete!"
echo ""
echo "Your websites are now live at:"
echo "  Main: https://vision-africa-group.vercel.app"
echo "  Shop: https://vision-africa-group.vercel.app/shop"
echo ""
echo "✨ Visit your site and enjoy!"
