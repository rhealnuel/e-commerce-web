'use client'
import { useCart } from '@/utils/cartContext'
import { useState } from 'react'
import Link from 'next/link'

export default function ProductDetailClient({ product }: { product: any }) {
  const { addToCart, isInCart, getItemQuantity } = useCart()
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || '')
  const [quantity, setQuantity] = useState(1)
  const [isAddingToCart, setIsAddingToCart] = useState(false)

  const hasDiscount = product.originalPrice && product.originalPrice > product.price
  const discountPercentage = hasDiscount
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  const itemInCart = isInCart(product.id)
  const cartQuantity = getItemQuantity(product.id)

  const handleAddToCart = async () => {
    if (!product.inStock) return

    setIsAddingToCart(true)
    try {
      addToCart(product.id, quantity)
      setTimeout(() => {
        setIsAddingToCart(false)
        setQuantity(1)
      }, 800)
    } catch (error) {
      console.error('Error adding to cart:', error)
      setIsAddingToCart(false)
    }
  }

  // ...Rest of your component as before!
  // Just use `product` instead of looking it up by id.

  return (
    // === Your full Product Detail JSX here ===
    // Copy and paste everything from your current component's return statement,
    // replacing all `product = products.find...` logic at the top with the `product` prop.
    // The code you provided can be pasted here directly (starting from <div className="min-h-screen ...">)
    // No changes required in the inner return.
    // (If you want me to paste the entire content, just ask! To keep this concise, I'm just giving the main structural change.)
    // ...
    <div className="min-h-screen bg-stone-50">
      {/* ...all your JSX as before */}
      <div className="bg-gradient-to-br from-stone-900 via-amber-900 to-orange-900 text-white py-8">
              <div className="max-w-7xl mx-auto px-4">
                {/* Breadcrumb */}
                <nav className="text-sm text-stone-300 mb-6">
                  <Link href="/" className="hover:text-amber-300 transition-colors">Home</Link>
                  <span className="mx-2">/</span>
                  <Link href="/categories" className="hover:text-amber-300 transition-colors">Categories</Link>
                  <span className="mx-2">/</span>
                  <Link href={`/category/${product.category.toLowerCase()}`} className="hover:text-amber-300 transition-colors">{product.category}</Link>
                  <span className="mx-2">/</span>
                  <span className="text-amber-300">{product.name}</span>
                </nav>
      
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {product.brand}
                  </div>
                  <div className="text-stone-300">•</div>
                  <div className="text-stone-300">{product.category}</div>
                  {product.inStock && (
                    <>
                      <div className="text-stone-300">•</div>
                      <div className="text-green-400 font-semibold text-sm">✓ In Stock</div>
                    </>
                  )}
                </div>
              </div>
            </div>
      
            <div className="max-w-7xl mx-auto px-4 py-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Image Gallery */}
                <div className="space-y-6">
                  {/* Main Image */}
                  <div className="relative group">
                    <div className="bg-white rounded-3xl p-4 shadow-2xl">
                      <img 
                        src={product.images?.[selectedImageIndex] || product.image} 
                        alt={product.name}
                        className="w-full h-96 lg:h-[500px] object-cover rounded-2xl"
                      />
                      {hasDiscount && (
                        <div className="absolute top-6 left-6 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full font-bold shadow-lg animate-pulse">
                          -{discountPercentage}% OFF
                        </div>
                      )}
                      {!product.inStock && (
                        <div className="absolute inset-4 bg-black bg-opacity-60 flex items-center justify-center rounded-2xl backdrop-blur-sm">
                          <span className="text-white font-bold text-2xl">Out of Stock</span>
                        </div>
                      )}
                    </div>
                  </div>
      
                  {/* Thumbnail Images */}
                  {product.images && product.images.length > 1 && (
                    <div className="flex gap-4 overflow-x-auto pb-2">
                      {product.images.map((image:any, index: any) => (
                        <div key={index} className="flex-shrink-0">
                          <img
                            src={image}
                            alt={`${product.name} view ${index + 1}`}
                            className={`w-20 h-20 object-cover rounded-xl cursor-pointer transition-all duration-300 ${
                              selectedImageIndex === index 
                                ? 'ring-4 ring-amber-500 ring-offset-2 shadow-lg scale-105' 
                                : 'hover:opacity-75 hover:scale-105'
                            }`}
                            onClick={() => setSelectedImageIndex(index)}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
      
                {/* Product Info */}
                <div className="space-y-8">
                  {/* Product Name */}
                  <div>
                    <h1 className="text-4xl lg:text-5xl font-black text-stone-900 leading-tight mb-6">
                      {product.name}
                    </h1>
      
                    {/* Rating */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-6 h-6 ${
                              i < Math.floor(product.rating || 0) ? 'text-amber-400' : 'text-stone-300'
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-xl font-bold text-stone-900">{product.rating}</span>
                      <span className="text-stone-600">({product.reviewCount} reviews)</span>
                    </div>
                  </div>
      
                  {/* Price */}
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border-2 border-amber-200">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-4xl lg:text-5xl font-black text-stone-900">
                        ₦{(product.price / 100).toLocaleString()}
                      </span>
                      {hasDiscount && (
                        <span className="text-xl text-stone-500 line-through">
                          ₦{(product.originalPrice / 100).toLocaleString()}
                        </span>
                      )}
                    </div>
                    {product.shipping?.freeShipping && (
                      <p className="text-green-600 font-bold flex items-center gap-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Free shipping included
                      </p>
                    )}
                  </div>
      
                  {/* Description */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-stone-900 mb-4">About This Product</h3>
                    <p className="text-stone-700 text-lg leading-relaxed">
                      {product.longDescription || product.description}
                    </p>
                  </div>
      
                  {/* Key Features */}
                  {product.features && (
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                      <h3 className="text-xl font-bold text-stone-900 mb-4">Key Features</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {product.features.slice(0, 8).map((feature:any, index: any) => (
                          <div key={index} className="flex items-center gap-3 p-2">
                            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="text-stone-700 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
      
                  {/* Color Selection */}
                  {product.colors && product.colors.length > 1 && (
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                      <h3 className="text-xl font-bold text-stone-900 mb-4">Available Colors</h3>
                      <div className="flex gap-3 flex-wrap">
                        {product.colors.map((color:any) => (
                          <button
                            key={color}
                            onClick={() => setSelectedColor(color)}
                            className={`px-6 py-3 rounded-xl border-2 font-semibold transition-all duration-300 ${
                              selectedColor === color
                                ? 'border-amber-500 bg-amber-50 text-amber-800 shadow-lg'
                                : 'border-stone-200 hover:border-amber-300 hover:bg-stone-50'
                            }`}
                          >
                            {color}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
      
                  {/* Quantity and Actions */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg space-y-6">
                    <div className="flex items-center gap-6">
                      <label className="text-xl font-bold text-stone-900">Quantity:</label>
                      <div className="flex items-center border-2 border-stone-300 rounded-xl overflow-hidden">
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="px-4 py-3 hover:bg-stone-100 transition-colors font-bold text-stone-700"
                        >
                          −
                        </button>
                        <span className="px-6 py-3 font-bold text-lg bg-stone-50">{quantity}</span>
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="px-4 py-3 hover:bg-stone-100 transition-colors font-bold text-stone-700"
                        >
                          +
                        </button>
                      </div>
                      {product.inStock && (
                        <span className="text-sm text-center font-semibold px-3 py-1 rounded-full bg-green-100 text-green-700">
                          {product.stockQuantity > 10 
                            ? 'In Stock' 
                            : `Only ${product.stockQuantity} left!`
                          }
                        </span>
                      )}
                    </div>
      
                    {/* Action Buttons */}
                    <div className="space-y-4">
                      <button
                        onClick={handleAddToCart}
                        disabled={!product.inStock || isAddingToCart}
                        className={`w-full md:py-5 py-3  rounded-2xl font-black text:base md:text-xl transition-all duration-300 ${
                          product.inStock
                            ? `${isAddingToCart 
                                ? 'bg-amber-400 text-amber-900' 
                                : itemInCart 
                                  ? 'bg-green-500 text-white hover:bg-green-600' 
                                  : 'bg-gradient-to-r from-amber-600 to-orange-600 text-white hover:from-amber-700 hover:to-orange-700'
                              } hover:shadow-xl transform hover:scale-[1.02] active:scale-95`
                            : 'bg-stone-300 text-stone-500 cursor-not-allowed'
                        }`}
                      >
                        {isAddingToCart ? (
                          <span className="flex items-center justify-center gap-3">
                            <svg className="w-6 h-6 animate-spin" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Adding {quantity} to Cart...
                          </span>
                        ) : product.inStock ? (
                          itemInCart ? (
                            <span className="flex items-center justify-center gap-3">
                              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              In Cart ({cartQuantity}) - Add {quantity} More
                            </span>
                          ) : (
                            <span className="flex items-center justify-center gap-3">
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5-5M7 13l-2.5 2.5M17 21a2 2 0 100-4 2 2 0 000 4zM9 21a2 2 0 100-4 2 2 0 000 4z" />
                              </svg>
                              Add {quantity} to Cart
                            </span>
                          )
                        ) : (
                          'Out of Stock'
                        )}
                      </button>
      
                      <div className="grid grid-cols-2 gap-4">
                        <button className="md:py-4 py-2 px-2 md:px-6 border-2 border-amber-600 text-amber-600 rounded-2xl font-bold hover:bg-amber-50 transition-all duration-300 flex items-center justify-center gap-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                          Wishlist
                        </button>
                        <Link 
                          href="/checkout"
                          className="md:py-4 md:px-6 py-2 px-2 bg-stone-800 text-white rounded-2xl font-bold hover:bg-stone-900 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                          Buy Now
                        </Link>
                      </div>
                    </div>
                  </div>
      
                  {/* Shipping Info */}
                  {product.shipping && (
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6">
                      <h3 className="font-bold text-green-800 text-lg mb-4 flex items-center gap-2">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                          <path d="M3 4a1 1 0 00-1 1v1a1 1 0 001 1h1l2 7a1 1 0 001 1h7a1 1 0 001-1L13.5 7H5.414l-.293-.707A1 1 0 004.414 6H3a1 1 0 01-1-1V4z"/>
                        </svg>
                        Shipping Information
                      </h3>
                      <div className="space-y-2 text-green-700">
                        <p className="flex items-center gap-2">
                          <span>📦</span>
                          <span><strong>Delivery:</strong> {product.shipping.estimatedDelivery}</span>
                        </p>
                        {product.shipping.freeShipping && (
                          <p className="flex items-center gap-2">
                            <span>🚚</span>
                            <span><strong>Free shipping</strong> on this item</span>
                          </p>
                        )}
                        <p className="flex items-center gap-2">
                          <span>📍</span>
                          <span><strong>Ships from:</strong> {product.vendor?.location}</span>
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
      
              {/* Specifications Section */}
              {product.specifications && (
                <div className="mt-16 bg-white rounded-3xl shadow-2xl p-8 border border-stone-200">
                  <h2 className="text-3xl font-black text-stone-900 mb-8 flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15.586 13H14a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    Technical Specifications
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Object.entries(product.specifications).map(([key, value]) => (
                            <div key={key} className="bg-gradient-to-br from-stone-50 to-amber-50 rounded-xl p-6 border border-stone-200">
                            <div className="font-bold text-stone-900 text-lg capitalize mb-2">
                                {key.replace(/([A-Z])/g, ' $1').trim()}
                            </div>
                            <div className="text-stone-700 font-medium">{String(value)}</div>
                            </div>
                    ))}
                    </div>
                </div>
              )}
      
              {/* Vendor Information */}
              {product.vendor && (
                <div className="mt-8 bg-gradient-to-br from-amber-100 to-orange-100 border-2 border-amber-300 rounded-3xl p-8">
                  <h3 className="text-2xl font-black text-amber-900 mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    Sold by {product.vendor.name}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-5 h-5 ${
                              i < Math.floor(product.vendor.rating) ? 'text-amber-500' : 'text-stone-300'
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="font-bold text-amber-800">{product.vendor.rating} seller rating</span>
                    </div>
                    <div className="text-amber-700 font-semibold">📍 {product.vendor.location}</div>
                  </div>
                </div>
              )}
            </div>
    </div>
  )
}
