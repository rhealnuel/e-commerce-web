'use client'
import Link from 'next/link'
import { useCart } from '../utils/cartContext'
import { useState } from 'react'

export default function ProductCard({ product }: { product: any }) {
  const { addToCart, isInCart, getItemQuantity } = useCart()
  const [isAdding, setIsAdding] = useState(false)
  
  const hasDiscount = product.originalPrice && product.originalPrice > product.price
  const discountPercentage = hasDiscount 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  const handleAddToCart = async () => {
    if (!product.inStock) return
    
    setIsAdding(true)
    try {
      addToCart(product.id)
      // Optional: Add a brief success animation
      setTimeout(() => setIsAdding(false), 500)
    } catch (error) {
      console.error('Error adding to cart:', error)
      setIsAdding(false)
    }
  }

  const itemInCart = isInCart(product.id)
  const cartQuantity = getItemQuantity(product.id)

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-1">
      {/* Image Container with Discount Badge */}
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="h-48 sm:h-56 lg:h-48 xl:h-56 w-full object-cover group-hover:scale-110 transition-transform duration-500" 
        />
        
        {/* Discount Badge */}
        {hasDiscount && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
            -{discountPercentage}%
          </div>
        )}
        
        {/* Stock Status Overlay */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center backdrop-blur-sm">
            <span className="text-white font-bold text-lg">Out of Stock</span>
          </div>
        )}

        {/* Quick View on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-3 left-3 right-3">
            <Link 
              href={`/products/${product.id}`}
              className="w-full bg-white/90 backdrop-blur-sm text-stone-800 py-2 px-4 rounded-lg text-sm font-semibold text-center hover:bg-white transition-all opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300 block"
            >
              Quick View
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 lg:p-4 xl:p-5 flex flex-col">
        {/* Brand and Category */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs sm:text-sm text-amber-600 font-semibold bg-amber-50 px-2 py-1 rounded-full">
            {product.brand}
          </span>
          <span className="text-xs text-stone-500 bg-stone-100 px-2 py-1 rounded-full">
            {product.category}
          </span>
        </div>

        {/* Product Name */}
        <h3 className="font-bold text-base sm:text-lg text-stone-900 mb-2 line-clamp-2 group-hover:text-amber-800 transition-colors">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-3 h-3 sm:w-4 sm:h-4 ${
                  i < Math.floor(product.rating || 0) ? 'text-amber-400' : 'text-stone-300'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-xs sm:text-sm text-stone-600 ml-2 font-medium">
            {product.rating} ({product.reviewCount || 0})
          </span>
        </div>

        {/* Description */}
        <p className="text-stone-600 text-xs sm:text-sm mb-4 line-clamp-2 flex-1 leading-relaxed">
          {product.description}
        </p>

        {/* Key Features */}
        {product.features && product.features.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-1">
              {product.features.slice(0, 2).map((feature: string, index: number) => (
                <span
                  key={index}
                  className="text-xs bg-gradient-to-r from-amber-50 to-orange-50 text-amber-700 px-2 py-1 rounded-full border border-amber-200"
                >
                  {feature}
                </span>
              ))}
              {product.features.length > 2 && (
                <span className="text-xs text-stone-500 font-medium">
                  +{product.features.length - 2} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Price Section */}
        <div className="flex items-end justify-between mb-4">
          <div className="flex flex-col">
            <div className="flex items-baseline gap-2 flex-wrap">
              <span className="text-lg sm:text-xl font-black text-stone-900">
                ₦{(product.price / 100).toLocaleString()}
              </span>
              {hasDiscount && (
                <span className="text-sm text-stone-500 line-through">
                  ₦{(product.originalPrice / 100).toLocaleString()}
                </span>
              )}
            </div>
            {product.shipping?.freeShipping && (
              <span className="text-xs text-green-600 font-semibold bg-green-50 px-2 py-1 rounded-full mt-1 inline-block w-fit">
                ✓ Free Shipping
              </span>
            )}
          </div>
          
          {/* Stock Status */}
          <div className="text-right">
            {product.inStock ? (
              <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                product.stockQuantity > 10 
                  ? 'text-green-700 bg-green-100' 
                  : 'text-orange-700 bg-orange-100'
              }`}>
                {product.stockQuantity > 10 ? 'In Stock' : `${product.stockQuantity} left`}
              </span>
            ) : (
              <span className="text-xs text-red-600 font-semibold bg-red-100 px-2 py-1 rounded-full">
                Out of Stock
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2">
          <Link 
            href={`/products/${product.id}`} 
            className={`w-full py-2.5 sm:py-3 rounded-xl text-center font-bold text-sm sm:text-base transition-all duration-300 block ${
              product.inStock 
                ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white hover:from-amber-700 hover:to-orange-700 hover:shadow-lg transform hover:scale-[1.02]' 
                : 'bg-stone-300 text-stone-500 cursor-not-allowed'
            }`}
          >
            {product.inStock ? 'View Details' : 'Out of Stock'}
          </Link>

          {/* Secondary Actions (for larger screens) */}
          <div className="hidden sm:grid grid-cols-2 gap-2">
            <button 
              className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all ${
                product.inStock
                  ? 'border-2 border-amber-600 text-amber-600 hover:bg-amber-50'
                  : 'border-2 border-stone-300 text-stone-400 cursor-not-allowed'
              }`}
              disabled={!product.inStock}
            >
              ♡ Wishlist
            </button>
            <button 
              onClick={handleAddToCart}
              disabled={!product.inStock || isAdding}
              className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all ${
                product.inStock
                  ? `${itemInCart 
                      ? 'bg-green-100 text-green-700 border-2 border-green-300' 
                      : 'bg-stone-800 text-white hover:bg-stone-900'
                    } ${isAdding ? 'opacity-50 cursor-wait' : ''}`
                  : 'bg-stone-300 text-stone-500 cursor-not-allowed'
              }`}
            >
              {isAdding ? (
                <span className="flex items-center gap-1">
                  <svg className="w-3 h-3 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Adding...
                </span>
              ) : itemInCart ? (
                <span className="flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  In Cart ({cartQuantity})
                </span>
              ) : (
                '+ Cart'
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Hover Effects Border */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-amber-200 transition-colors duration-300 pointer-events-none"></div>
    </div>
  )
}