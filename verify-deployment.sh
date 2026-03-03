#!/bin/bash

# Pre-Deployment Verification Script for JX Distribution Website
# Run this script before deploying to Hostinger

echo "=========================================="
echo "JX Distribution - Pre-Deployment Checklist"
echo "=========================================="
echo ""

ERRORS=0
WARNINGS=0

# Check 1: Build directory exists
echo "✓ Checking build output..."
if [ -d "out" ]; then
    FILE_COUNT=$(find out -type f | wc -l)
    echo "  ✓ Found $FILE_COUNT files in out/ directory"
else
    echo "  ✗ ERROR: out/ directory not found"
    echo "    Run: npm run build:static"
    ERRORS=$((ERRORS + 1))
fi
echo ""

# Check 2: Key files exist
echo "✓ Checking key files..."
FILES=(
    "out/index.html"
    "out/shop/index.html"
    "out/shop/checkout/index.html"
    "out/_next"
    "out/images"
)

for file in "${FILES[@]}"; do
    if [ -e "$file" ]; then
        echo "  ✓ Found $file"
    else
        echo "  ✗ Missing: $file"
        ERRORS=$((ERRORS + 1))
    fi
done
echo ""

# Check 3: Product pages generated
echo "✓ Checking product pages..."
PRODUCT_PAGES=$(find out/shop -type d -name '*filter*' -o -name '*oil*' | wc -l)
if [ "$PRODUCT_PAGES" -gt 0 ]; then
    echo "  ✓ Found multiple product pages"
else
    echo "  ⚠ Warning: No product pages detected"
    WARNINGS=$((WARNINGS + 1))
fi
echo ""

# Check 4: JavaScript/CSS files
echo "✓ Checking assets..."
JS_FILES=$(find out/_next -name "*.js" 2>/dev/null | wc -l)
CSS_FILES=$(find out/_next -name "*.css" 2>/dev/null | wc -l)
echo "  ✓ Found $JS_FILES JavaScript files"
echo "  ✓ Found $CSS_FILES CSS files"
echo ""

# Check 5: Public assets
echo "✓ Checking public assets..."
IMAGE_DIRS=$(ls -d out/images/*/  2>/dev/null | wc -l)
echo "  ✓ Image directories: $IMAGE_DIRS"

if [ -f "out/css/style.css" ] || [ -f "out/public/css/style.css" ]; then
    echo "  ✓ CSS files found"
else
    echo "  ⚠ Warning: Main CSS file not found"
    WARNINGS=$((WARNINGS + 1))
fi
echo ""

# Check 6: Configuration files
echo "✓ Checking configuration..."
if [ -f ".htaccess.hostinger" ]; then
    echo "  ✓ Hostinger .htaccess template found"
else
    echo "  ⚠ Warning: .htaccess.hostinger not found"
    WARNINGS=$((WARNINGS + 1))
fi

if [ -f "HOSTINGER_DEPLOYMENT.md" ]; then
    echo "  ✓ Deployment guide found"
fi
echo ""

# Check 7: Package info
echo "✓ Checking application metadata..."
if [ -f "package.json" ]; then
    APP_NAME=$(grep '"name"' package.json | head -1 | cut -d'"' -f4)
    APP_VERSION=$(grep '"version"' package.json | head -1 | cut -d'"' -f4)
    echo "  App: $APP_NAME v$APP_VERSION"
fi
echo ""

# Summary
echo "=========================================="
if [ $ERRORS -eq 0 ]; then
    echo "✓ BUILD READY FOR DEPLOYMENT"
    echo ""
    echo "Next steps:"
    echo "1. Copy .htaccess.hostinger to public_html/.htaccess"
    echo "2. Upload all files from out/ to public_html/"
    echo "3. Visit https://yourdomain.com to verify"
    echo ""
else
    echo "✗ BUILD HAS ERRORS"
    echo ""
    if [ $ERRORS -gt 0 ]; then
        echo "Errors: $ERRORS"
    fi
    if [ $WARNINGS -gt 0 ]; then
        echo "Warnings: $WARNINGS"
    fi
    echo ""
    echo "Please fix errors before deploying"
fi
echo "=========================================="

exit $ERRORS
