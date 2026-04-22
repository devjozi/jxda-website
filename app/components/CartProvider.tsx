'use client';

/**
 * CartProvider — Global shopping cart state using React Context.
 * Persists to localStorage and provides add/remove/clear actions.
 */

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { Product } from '../../lib/products';
import { addOrIncrement, cartCount, cartTotal, readCart, writeCart, type CartItemLite } from '../../lib/cart';

export type CartItem = CartItemLite;

export type CartContextType = {
  items: CartItem[];
  itemCount: number;
  totalPrice: number;
  addToCart: (product: Product, qty?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, qty: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isHydratedFromStorage, setIsHydratedFromStorage] = useState(false);

  // Load cart from localStorage after mount to keep initial SSR/CSR render consistent.
  useEffect(() => {
    try {
      setItems(readCart());
    } catch (err) {
      console.error('Failed to load cart from localStorage:', err);
      setItems([]);
    } finally {
      setIsHydratedFromStorage(true);
    }
  }, []);

  // Persist cart to localStorage whenever items change
  useEffect(() => {
    if (!isHydratedFromStorage) {
      return;
    }

    try {
      writeCart(items);
    } catch (err) {
      console.error('Failed to save cart to localStorage:', err);
    }
  }, [items, isHydratedFromStorage]);

  const addToCart = (product: Product, qty = 1) => {
    setItems((prev) => {
      return addOrIncrement(
        prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          qty,
          image: product.image,
          slug: product.slug,
        },
        qty,
      );
    });
  };

  const removeFromCart = (productId: string) => {
    setItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId: string, qty: number) => {
    if (qty <= 0) {
      removeFromCart(productId);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, qty: Math.max(1, Math.floor(qty)) } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const itemCount = cartCount(items);
  const totalPrice = cartTotal(items);

  const value: CartContextType = {
    items,
    itemCount,
    totalPrice,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
}
