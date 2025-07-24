'use client'
import { products } from '../data/products'
import { useCart } from '../utils/cartContext'
import { useState } from 'react'
import Link from 'next/link'

export default function CartItem({ id, quantity }: { id: string; quantity: number }) {
  const product = products.find(p => p.id === id)
  const { removeFromCart, updateQuantity } = useCart()
  const [isRemoving, setIsRemoving] = useState(false)
  
  if (!product) return null

  const handleRemove = () => {
    setIsRemoving(true)
    setTimeout(() => {
      removeFromCart(id)
    }, 300)
  }

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity > 0 && updateQuantity) {
      updateQuantity(id, newQuantity)
    }
  }

  const totalPrice = (product.price * quantity) / 100
  const hasDiscount = product.originalPrice && product.originalPrice > product.price
  const originalTotalPrice = hasDiscount ? (product.originalPrice * quantity) / 100 : null

  return (
    <div className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-stone-200 group ${isRemoving ? 'opacity-50 scale-95' : ''}`}>
      <div className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          {/* Product Image */}
          <div className="relative flex-shrink-0">
            <div className="w-full sm:w-24 lg:w-28 h-24 lg:h-28 bg-stone-100 rounded-xl overflow-hidden group-hover:shadow-lg transition-shadow">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
            
            {/* Stock Status Badge */}
            {!product.inStock && (
              <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                Out of Stock
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
              {/* Product Info */}
              <div className="flex-1 min-w-0">
                {/* Brand */}
                <div className="text-xs text-amber-600 font-semibold bg-amber-50 px-2 py-1 rounded-full inline-block mb-2">
                  {product.brand}
                </div>
                
                {/* Product Name */}
                <h4 className="font-bold text-stone-900 text-sm sm:text-base mb-2 line-clamp-2">
                  <Link href={`/products/${product.id}`} className="hover:text-amber-600 transition-colors">
                    {product.name}
                  </Link>
                </h4>
                
                {/* Product Features (if available) */}
                {product.features && product.features.length > 0 && (
                  <div className="hidden sm:flex flex-wrap gap-1 mb-3">
                    {product.features.slice(0, 2).map((feature: string, index: number) => (
                      <span
                        key={index}
                        className="text-xs bg-stone-100 text-stone-600 px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                )}

                {/* Quantity Controls */}
                <div className="flex items-center gap-3 mb-3 sm:mb-0">
                  <span className="text-sm font-medium text-stone-700">Qty:</span>
                  <div className="flex items-center border-2 border-stone-200 rounded-lg bg-stone-50">
                    <button
                      onClick={() => handleQuantityChange(quantity - 1)}
                      className="px-3 py-1 hover:bg-stone-200 transition-colors text-stone-600 font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={quantity <= 1}
                    >
                      −
                    </button>
                    <span className="px-3 py-1 font-semibold text-stone-900 min-w-[2rem] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(quantity + 1)}
                      className="px-3 py-1 hover:bg-stone-200 transition-colors text-stone-600 font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={!product.inStock || quantity >= (product.stockQuantity || 99)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Price and Actions */}
              <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-3">
                {/* Price */}
                <div className="text-right">
                  <div className="flex items-center gap-2">
                    <span className="text-lg sm:text-xl font-black text-stone-900">
                      ₦{totalPrice.toLocaleString()}
                    </span>
                  </div>
                  
                  {originalTotalPrice && (
                    <div className="text-sm text-stone-500 line-through">
                      ₦{originalTotalPrice.toLocaleString()}
                    </div>
                  )}
                  
                  <div className="text-xs text-stone-600 mt-1">
                    ₦{(product.price / 100).toLocaleString()} each
                  </div>
                  
                  {product.shipping?.freeShipping && (
                    <div className="text-xs text-green-600 font-semibold bg-green-50 px-2 py-1 rounded-full mt-2 inline-block">
                      ✓ Free Shipping
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-2">
                  {/* Remove Button */}
                  <button
                    onClick={handleRemove}
                    className="group flex items-center gap-2 px-3 py-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-all duration-200 text-sm font-semibold"
                  >
                    <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    <span className="hidden sm:inline">Remove</span>
                  </button>

                  {/* Save for Later */}
                  <button className="group flex items-center gap-2 px-3 py-2 text-amber-600 hover:text-amber-700 hover:bg-amber-50 rounded-lg transition-all duration-200 text-sm font-semibold">
                    <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span className="hidden sm:inline">Save</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Stock Warning */}
            {product.inStock && product.stockQuantity && product.stockQuantity <= 5 && (
              <div className="mt-3 p-2 bg-orange-50 border border-orange-200 rounded-lg">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span className="text-orange-700 text-xs font-semibold">
                    Only {product.stockQuantity} left in stock!
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Hover Border Effect */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-amber-200 transition-colors duration-300 pointer-events-none"></div>
    </div>
  )
}