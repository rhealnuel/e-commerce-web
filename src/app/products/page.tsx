'use client'
import ProductList from '@/components/ProductList'
import { products } from '@/data/products'
import { useState } from 'react'
import Link from 'next/link'

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('featured')
  const [priceRange, setPriceRange] = useState([0, 300000])
  const [showFilters, setShowFilters] = useState(false)

  // Get unique categories
  const categories = ['all', ...new Set(products.map(product => product.category))]

  // Get unique brands
  const brands = [...new Set(products.map(product => product.brand))]

  // Calculate statistics
  const totalProducts = products.length
  const inStockProducts = products.filter(p => p.inStock).length
  const averageRating = (products.reduce((acc, p) => acc + (p.rating || 0), 0) / products.length).toFixed(1)
  const minPrice = Math.min(...products.map(p => p.price))
  const maxPrice = Math.max(...products.map(p => p.price))

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-stone-900 via-amber-900 to-orange-900 text-white overflow-hidden relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-amber-600 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-600 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-600 rounded-full blur-3xl opacity-5"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="text-center">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-8 shadow-lg">
              <span>🛍️</span>
              <span>PREMIUM ELECTRONICS COLLECTION</span>
              <span>🛍️</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
              All
              <span className="block bg-gradient-to-r from-yellow-300 via-orange-300 to-amber-300 bg-clip-text text-transparent drop-shadow-lg">
                Products
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-stone-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Explore our complete collection of premium electronics and cutting-edge gadgets. From the latest smartphones to professional audio equipment.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-black text-yellow-300">{totalProducts}</div>
                <div className="text-stone-300 text-sm">Total Products</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-black text-yellow-300">{categories.length - 1}</div>
                <div className="text-stone-300 text-sm">Categories</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-black text-yellow-300">{brands.length}</div>
                <div className="text-stone-300 text-sm">Brands</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-black text-yellow-300">{averageRating}★</div>
                <div className="text-stone-300 text-sm">Avg Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Special Offers Banner */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center gap-4 text-center">
            <span className="text-2xl animate-bounce">🎉</span>
            <div>
              <span className="font-black text-lg">FREE SHIPPING: </span>
              <span className="font-semibold">On all orders above ₦50,000 | Same day delivery in Lagos & Abuja</span>
            </div>
            <span className="text-2xl animate-bounce">🎉</span>
          </div>
        </div>
      </div>

      {/* Quick Category Navigation */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-black text-stone-900 mb-4">Shop by Category</h2>
            <p className="text-lg text-stone-600">Jump to your favorite product categories</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.filter(cat => cat !== 'all').map((category) => {
              const categoryProducts = products.filter(p => p.category === category)
              const categoryIcons: { [key: string]: string } = {
                'Audio': '🎧',
                'Wearables': '⌚',
                'Gaming': '🎮',
                'Accessories': '🔌',
                'Storage': '💾'
              }
              const categoryColors: { [key: string]: string } = {
                'Audio': 'from-amber-600 to-orange-700',
                'Wearables': 'from-orange-600 to-red-700',
                'Gaming': 'from-amber-700 to-yellow-700',
                'Accessories': 'from-yellow-600 to-amber-700',
                'Storage': 'from-orange-700 to-amber-800'
              }

              return (
                <Link
                  key={category}
                  href={`/category/${category.toLowerCase()}`}
                  className="group bg-gradient-to-br from-stone-50 to-amber-50 rounded-2xl p-6 text-center hover:shadow-2xl hover:border-amber-300 transition-all duration-300 transform hover:-translate-y-2 border-2 border-stone-200"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${categoryColors[category] || 'from-amber-600 to-orange-700'} rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <span className="text-2xl">{categoryIcons[category] || '📱'}</span>
                  </div>
                  <h3 className="text-lg font-bold text-stone-900 mb-2">{category}</h3>
                  <p className="text-stone-600 text-sm mb-3">{categoryProducts.length} products</p>
                  <div className="text-xs text-amber-600 font-bold bg-amber-100 rounded-full px-3 py-1 inline-block">
                    From ₦{Math.min(...categoryProducts.map(p => Math.round(p.price / 1000)))}K
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="py-8 bg-gradient-to-br from-stone-100 to-amber-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Filter Controls */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
              {/* Search and Filter Toggle */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full lg:w-auto">
                <div className="relative flex-1 sm:flex-initial">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full sm:w-80 pl-12 pr-4 py-3 border-2 border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  />
                  <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>

                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-amber-700 hover:to-orange-700 transition-all flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707v4.586a1 1 0 01-.293.707L9 21.414A1 1 0 018 21V14.586a1 1 0 00-.293-.707L1.293 7.293A1 1 0 011 6.586V4z" />
                  </svg>
                  Filters
                </button>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-3">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 capitalize ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg transform scale-105'
                        : 'bg-stone-100 text-stone-700 hover:bg-stone-200 hover:scale-105'
                    }`}
                  >
                    {category === 'all' ? 'All Products' : category}
                  </button>
                ))}
              </div>

              {/* Sort Filter */}
              <div className="flex items-center gap-4">
                <label className="text-stone-700 font-semibold whitespace-nowrap">Sort by:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-white border-2 border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent min-w-[160px]"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Best Rated</option>
                  <option value="newest">Newest First</option>
                  <option value="popular">Most Popular</option>
                </select>
              </div>
            </div>

            {/* Mobile Filters */}
            {showFilters && (
              <div className="lg:hidden mt-6 pt-6 border-t border-stone-200">
                <div className="space-y-6">
                  {/* Price Range */}
                  <div>
                    <h4 className="font-semibold text-stone-800 mb-4">Price Range</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm text-stone-600">
                        <span>₦{(minPrice / 100).toLocaleString()}</span>
                        <span>₦{(maxPrice / 100).toLocaleString()}</span>
                      </div>
                      <input
                        type="range"
                        min={minPrice}
                        max={maxPrice}
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([minPrice, parseInt(e.target.value)])}
                        className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                  </div>

                  {/* Availability */}
                  <div>
                    <h4 className="font-semibold text-stone-800 mb-4">Availability</h4>
                    <div className="space-y-2">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 text-amber-600 rounded" defaultChecked />
                        <span className="text-stone-700">In Stock ({inStockProducts})</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 text-amber-600 rounded" />
                        <span className="text-stone-700">Out of Stock ({totalProducts - inStockProducts})</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-4 text-center">
              <p className="text-stone-600">
                Showing <span className="font-bold text-amber-600">{totalProducts}</span> products
                {selectedCategory !== 'all' && (
                  <span> in <span className="font-bold text-amber-600 capitalize">{selectedCategory}</span></span>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">⭐</span>
            </div>
            <div>
              <h2 className="text-3xl font-black text-stone-900">Featured Products</h2>
              <p className="text-stone-600">Hand-picked selections just for you</p>
            </div>
          </div>

          <ProductList />
        </div>
      </div>

      {/* Brands Section */}
      <div className="py-16 bg-gradient-to-br from-stone-100 to-amber-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-stone-900 mb-4">Trusted Brands</h2>
            <p className="text-lg text-stone-600">We partner with the world's leading technology brands</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-stone-200"
              >
                <h3 className="font-bold text-stone-900 text-lg">{brand}</h3>
                <p className="text-stone-600 text-sm mt-1">
                  {products.filter(p => p.brand === brand).length} products
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-amber-800 to-orange-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black mb-4">Stay Updated with New Products</h2>
          <p className="text-xl text-amber-100 mb-8">
            Be the first to know about new arrivals, exclusive deals, and tech insights
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-xl text-stone-900 focus:outline-none focus:ring-4 focus:ring-yellow-400"
            />
            <button className="bg-gradient-to-r from-yellow-400 to-orange-400 text-stone-900 px-6 py-3 rounded-xl font-bold hover:from-yellow-300 hover:to-orange-300 transition-all shadow-lg">
              Subscribe
            </button>
          </div>
          
          <p className="text-amber-200 text-sm mt-4">
            Join 50,000+ tech enthusiasts. Unsubscribe anytime.
          </p>
        </div>
      </div>

      
    </div>
  )
}