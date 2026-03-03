'use client';

/**
 * AddToCartButton — Client component for adding a product to cart from the product detail page.
 */

import { useCart } from './CartProvider';
import { Product } from '../../lib/products';
import { useState, useEffect, useRef } from 'react';

export default function AddToCartButton({
  product,
  className = 'btn btn-outline-primary',
}: {
  product: Product;
  className?: string;
}) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [showAdded, setShowAdded] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setShowAdded(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setShowAdded(false), 2000);
  };

  return (
    <div className="d-flex align-items-center gap-2">
      <input
        type="number"
        className="form-control"
        style={{ maxWidth: '80px' }}
        min="1"
        value={quantity}
        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
        aria-label="Quantity"
      />
      <button
        type="button"
        className={className}
        onClick={handleAddToCart}
        disabled={showAdded}
      >
        <i className="fa fa-shopping-cart me-2" />
        {showAdded ? 'Added!' : 'Add to Cart'}
      </button>
    </div>
  );
}
