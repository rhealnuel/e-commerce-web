'use client'
import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { products } from '../data/products'

type CartItem = {
  id: string
  quantity: number
}

interface CartContextType {
  cart: CartItem[]
  addToCart: (id: string, quantity?: number) => void
  removeFromCart: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  getCartTotal: () => number
  getCartItemsCount: () => number
  getCartSubtotal: () => number
  getCartSavings: () => number
  isInCart: (id: string) => boolean
  getItemQuantity: (id: string) => number
  getShippingCost: () => number
  getFinalTotal: () => number
  isEligibleForFreeShipping: () => boolean
  getAmountForFreeShipping: () => number
  isLoaded: boolean
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('e-shop-cart')
      if (savedCart) {
        setCart(JSON.parse(savedCart))
      }
    } catch (error) {
      console.error('Error loading cart from localStorage:', error)
    } finally {
      setIsLoaded(true)
    }
  }, [])

  // Save cart to localStorage whenever cart changes
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem('e-shop-cart', JSON.stringify(cart))
      } catch (error) {
        console.error('Error saving cart to localStorage:', error)
      }
    }
  }, [cart, isLoaded])

  const addToCart = (id: string, quantity: number = 1) => {
    const product = products.find(p => p.id === id)
    if (!product) {
      console.error('Product not found:', id)
      return
    }

    if (!product.inStock) {
      console.warn('Cannot add out of stock product to cart:', product.name)
      return
    }

    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === id)
      
      if (existingItem) {
        const newQuantity = existingItem.quantity + quantity
        const maxQuantity = product.stockQuantity || 99
        
        // Check if new quantity exceeds stock
        if (newQuantity > maxQuantity) {
          console.warn(`Cannot add more items. Only ${maxQuantity} available.`)
          return prevCart.map((item) => 
            item.id === id 
              ? { ...item, quantity: maxQuantity }
              : item
          )
        }
        
        return prevCart.map((item) => 
          item.id === id 
            ? { ...item, quantity: newQuantity }
            : item
        )
      }
      
      // Add new item to cart
      const initialQuantity = Math.min(quantity, product.stockQuantity || 99)
      return [...prevCart, { id, quantity: initialQuantity }]
    })
  }

  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id))
  }

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id)
      return
    }

    const product = products.find(p => p.id === id)
    if (!product) {
      console.error('Product not found:', id)
      return
    }

    const maxQuantity = product.stockQuantity || 99
    const validQuantity = Math.min(quantity, maxQuantity)

    setCart((prevCart) => 
      prevCart.map((item) => 
        item.id === id 
          ? { ...item, quantity: validQuantity }
          : item
      )
    )
  }

  const clearCart = () => {
    setCart([])
  }

  const getCartTotal = () => {
    return cart.reduce((total, item) => {
      const product = products.find(p => p.id === item.id)
      if (!product) return total
      return total + (product.price * item.quantity)
    }, 0)
  }

  const getCartSubtotal = () => {
    return getCartTotal()
  }

  const getCartSavings = () => {
    return cart.reduce((savings, item) => {
      const product = products.find(p => p.id === item.id)
      if (!product || !product.originalPrice) return savings
      const discount = (product.originalPrice - product.price) * item.quantity
      return savings + discount
    }, 0)
  }

  const getCartItemsCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0)
  }

  const isInCart = (id: string) => {
    return cart.some(item => item.id === id)
  }

  const getItemQuantity = (id: string) => {
    const item = cart.find(item => item.id === id)
    return item ? item.quantity : 0
  }

  // Calculate shipping
  const getShippingCost = () => {
    const subtotal = getCartSubtotal()
    const freeShippingThreshold = 5000000 // ₦50,000 in kobo
    return subtotal >= freeShippingThreshold ? 0 : 150000 // ₦1,500 shipping
  }

  const getFinalTotal = () => {
    return getCartSubtotal() + getShippingCost()
  }

  const isEligibleForFreeShipping = () => {
    const subtotal = getCartSubtotal()
    const freeShippingThreshold = 5000000 // ₦50,000 in kobo
    return subtotal >= freeShippingThreshold
  }

  const getAmountForFreeShipping = () => {
    const subtotal = getCartSubtotal()
    const freeShippingThreshold = 5000000 // ₦50,000 in kobo
    return Math.max(0, freeShippingThreshold - subtotal)
  }

  // Enhanced context value with additional utilities
  const contextValue: CartContextType = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartItemsCount,
    getCartSubtotal,
    getCartSavings,
    isInCart,
    getItemQuantity,
    getShippingCost,
    getFinalTotal,
    isEligibleForFreeShipping,
    getAmountForFreeShipping,
    isLoaded
  }

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  )
}