#!/bin/bash

echo "🚀 Vision Africa Group - GitHub Push Helper"
echo "==========================================="
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "❌ Git not initialized. Run 'git init' first."
    exit 1
fi

echo "✅ Git repository is ready!"
echo ""
echo "📝 Your commit is ready with message:"
echo "   'Complete redesign: Vision Africa Group websites with 3D elements'"
echo ""
echo "🎯 Next Steps:"
echo ""
echo "1. Create a NEW repository on GitHub:"
echo "   Go to: https://github.com/new"
echo "   Name: vision-africa-group"
echo "   (Do NOT initialize with README)"
echo ""
echo "2. Copy your repository URL, it looks like:"
echo "   https://github.com/YOUR-USERNAME/vision-africa-group.git"
echo ""
echo "3. Run these commands (replace YOUR-USERNAME):"
echo ""
echo "   git remote add origin https://github.com/YOUR-USERNAME/vision-africa-group.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "📖 For detailed instructions, read: PUSH_TO_GITHUB.md"
echo ""
