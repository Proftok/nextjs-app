#!/bin/bash

echo "========================================"
echo "Git Push to GitHub"
echo "========================================"
echo ""

# Initialize git repository if needed
if [ ! -d ".git" ]; then
    echo "Initializing Git repository..."
    git init
    git branch -M main
else
    echo "Git repository already initialized."
fi

echo ""
echo "Adding all files..."
git add .

echo ""
echo "Committing changes..."
git commit -m "Next.js 15 Strapi App with v5 compatibility"

echo ""
echo "Adding remote (if not already added)..."
git remote add origin https://github.com/Proftok/nextjs-app.git 2>/dev/null || true
git remote set-url origin https://github.com/Proftok/nextjs-app.git

echo ""
echo "Pushing to GitHub..."
git push -u origin main

echo ""
echo "========================================"
echo "Push complete!"
echo "========================================"
