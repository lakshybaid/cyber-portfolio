#!/bin/bash

# Build script for GitHub Pages deployment
echo "Building for GitHub Pages..."

# Set the repository name from environment or use default
export VITE_BASE_PATH="${GITHUB_REPOSITORY##*/}"

# Run the build with GitHub Pages config
vite build --config vite.config.gh-pages.ts

echo "Build complete! Output directory: dist/public"
