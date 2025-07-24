'use client'
import { products } from '@/data/products'
import ProductCard from '@/components/ProductCard'
import { useState } from 'react'
import Link from 'next/link'

export default function DealsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('discount')

  // Get products with discounts
  const dealsProducts = products.filter(product => 
    product.originalPrice && product.originalPrice > product.price
  )

  // Calculate discount percentage for each product
  const productsWithDiscounts = dealsProducts.map(product => ({
    ...product,
    discountPercentage: Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
  }))

  // Get unique categories from deals
  const categories = ['all', ...new Set(dealsProducts.map(product => product.category))]

  // Filter products
  const filteredProducts = productsWithDiscounts.filter(product => 
    selectedCategory === 'all' || product.category === selectedCategory
  )

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'discount':
        return b.discountPercentage - a.discountPercentage
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'rating':
        return (b.rating || 0) - (a.rating || 0)
      default:
        return 0
    }
  })

  // Calculate total savings
  const totalSavings = dealsProducts.reduce((acc, product) => 
    acc + (product.originalPrice - product.price), 0
  )

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-stone-900 via-amber-900 to-orange-900 text-white overflow-hidden relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-amber-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-600 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="text-center">
            <div className="inline-flex items-center space-x-3 bg-red-500 text-white px-6 py-3 rounded-full text-lg font-bold mb-6 animate-pulse">
              <span>🔥</span>
              <span>LIMITED TIME OFFERS</span>
              <span>🔥</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black mb-6">
              Exclusive
              <span className="block bg-gradient-to-r from-yellow-300 via-orange-300 to-red-400 bg-clip-text text-transparent">
                Deals & Offers
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-stone-300 mb-8 max-w-3xl mx-auto">
              Discover incredible savings on premium electronics. Limited time offers with up to 50% off on selected items!
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl font-black text-yellow-300">{dealsProducts.length}</div>
                <div className="text-stone-300 text-sm">Items on Sale</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl font-black text-yellow-300">
                  {Math.max(...productsWithDiscounts.map(p => p.discountPercentage))}%
                </div>
                <div className="text-stone-300 text-sm">Max Discount</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl font-black text-yellow-300">
                  ₦{(totalSavings / 100).toLocaleString()}
                </div>
                <div className="text-stone-300 text-sm">Total Savings</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Flash Sale Banner */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center gap-4 text-center">
            <span className="text-2xl animate-bounce">⚡</span>
            <div>
              <span className="font-black text-lg">FLASH SALE: </span>
              <span className="font-semibold">Extra 10% off on orders above ₦100,000 | Use code: FLASH10</span>
            </div>
            <span className="text-2xl animate-bounce">⚡</span>
          </div>
        </div>
      </div>

      {/* Filters and Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Controls */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 capitalize ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  {category === 'all' ? 'All Deals' : category}
                </button>
              ))}
            </div>

            {/* Sort Filter */}
            <div className="flex items-center gap-4">
              <label className="text-stone-700 font-semibold">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border-2 border-stone-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              >
                <option value="discount">Highest Discount</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Best Rated</option>
              </select>
            </div>
          </div>

          <div className="mt-4 text-center">
            <p className="text-stone-600">
              Showing <span className="font-bold text-amber-600">{sortedProducts.length}</span> deals
              {selectedCategory !== 'all' && (
                <span> in <span className="font-bold text-amber-600 capitalize">{selectedCategory}</span></span>
              )}
            </p>
          </div>
        </div>

        {/* Top Deals Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">🏆</span>
            </div>
            <h2 className="text-3xl font-black text-stone-900">Hottest Deals</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {sortedProducts.slice(0, 3).map(product => (
              <div key={product.id} className="relative">
                <div className="absolute -top-3 -right-3 z-10 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                  HOT DEAL!
                </div>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

        {/* All Deals Grid */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">💰</span>
            </div>
            <h2 className="text-3xl font-black text-stone-900">All Deals</h2>
          </div>

          {sortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {sortedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🛍️</div>
              <h3 className="text-2xl font-bold text-stone-900 mb-4">No Deals Found</h3>
              <p className="text-stone-600 mb-8">
                {selectedCategory === 'all' 
                  ? 'No deals are currently available.' 
                  : `No deals available in ${selectedCategory} category.`
                }
              </p>
              <button
                onClick={() => setSelectedCategory('all')}
                className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-amber-700 hover:to-orange-700 transition-all"
              >
                View All Deals
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-amber-800 to-orange-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black mb-4">Never Miss a Deal!</h2>
          <p className="text-xl text-amber-100 mb-8">
            Subscribe to get exclusive deals and early access to flash sales
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-xl text-stone-900 focus:outline-none focus:ring-4 focus:ring-yellow-400"
            />
            <button className="bg-gradient-to-r from-yellow-400 to-orange-400 text-stone-900 px-6 py-3 rounded-xl font-bold hover:from-yellow-300 hover:to-orange-300 transition-all">
              Get Deals
            </button>
          </div>
          
          <p className="text-amber-200 text-sm mt-4">
            Join 50,000+ smart shoppers. Unsubscribe anytime.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-stone-900 mb-4">Ready to Save Big?</h2>
          <p className="text-xl text-stone-600 mb-8">
            Don't wait! These deals won't last forever. Start shopping and save today!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/products" 
              className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-amber-700 hover:to-orange-700 transition-all shadow-lg"
            >
              Shop All Products
            </Link>
            <Link 
              href="/categories" 
              className="border-2 border-stone-300 text-stone-700 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-stone-100 transition-all"
            >
              Browse Categories
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}