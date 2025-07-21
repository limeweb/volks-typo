#!/bin/bash

# Script to set up the Red-Pixel-marketing repository

echo "Setting up Red-Pixel-marketing repository..."

# Create the marketing repo directory
cd ..
mkdir -p Red-Pixel-marketing
cd Red-Pixel-marketing

# Initialize git
git init

# Copy files from temporary location
cp -r /tmp/Red-Pixel-marketing/* .
cp /tmp/Red-Pixel-marketing/.gitignore .

# Create initial commit
git add .
git commit -m "Initial commit: Marketing strategy and good first issue templates"

echo "Marketing repository created successfully!"
echo ""
echo "Next steps:"
echo "1. Create a private GitHub repository named 'Red-Pixel-marketing'"
echo "2. Add the remote: git remote add origin https://github.com/yourusername/Red-Pixel-marketing.git"
echo "3. Push the initial commit: git push -u origin main"
echo ""
echo "Don't forget to return to the Red-Pixel directory and remove the marketing files!"