import { products } from '@/data/products'
import Link from 'next/link'

export default function CategoriesPage() {
  // Generate categories dynamically from product data
  const generateCategories = () => {
    const categoryMap = new Map()
    
    products.forEach(product => {
      if (!categoryMap.has(product.category)) {
        const categoryProducts = products.filter(p => p.category === product.category)
        const minPrice = Math.min(...categoryProducts.map(p => p.price))
        const avgRating = categoryProducts.reduce((acc, p) => acc + (p.rating || 0), 0) / categoryProducts.length
        
        categoryMap.set(product.category, {
          name: product.category,
          count: categoryProducts.length,
          minPrice: Math.round(minPrice / 1000),
          avgRating: avgRating.toFixed(1),
          products: categoryProducts,
          sampleProduct: categoryProducts[0]
        })
      }
    })
    
    return Array.from(categoryMap.values())
  }

  const categories = generateCategories()

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
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-stone-900 via-amber-900 to-orange-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="h-1 w-12 bg-gradient-to-r from-amber-400 to-orange-400"></div>
              <span className="text-amber-300 font-semibold tracking-wide">SHOP BY CATEGORY</span>
              <div className="h-1 w-12 bg-gradient-to-r from-amber-400 to-orange-400"></div>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-black mb-6">
              All Categories
            </h1>
            
            <p className="text-xl text-stone-300 leading-relaxed max-w-3xl mx-auto mb-8">
              Explore our complete range of premium electronics and gadgets. 
              From audio equipment to gaming gear, find exactly what you're looking for.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400">{categories.length}</div>
                <div className="text-stone-400 text-sm">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400">{products.length}</div>
                <div className="text-stone-400 text-sm">Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400">
                  {[...new Set(products.map(p => p.brand))].length}
                </div>
                <div className="text-stone-400 text-sm">Brands</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400">
                  {(products.reduce((acc, p) => acc + (p.rating || 0), 0) / products.length).toFixed(1)}★
                </div>
                <div className="text-stone-400 text-sm">Avg Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={`/category/${category.name.toLowerCase()}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Category Header */}
                <div className={`bg-gradient-to-br ${categoryColors[category.name] || 'from-amber-600 to-orange-700'} p-6 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-4xl">{categoryIcons[category.name] || '📱'}</span>
                      <div className="text-right">
                        <div className="text-2xl font-bold">{category.count}</div>
                        <div className="text-xs opacity-80">Products</div>
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold mb-2">{category.name}</h2>
                    <p className="text-sm opacity-90">Starting from ₦{category.minPrice}K</p>
                  </div>
                </div>

                {/* Category Content */}
                <div className="p-6">
                  {/* Sample Products */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {category.products.slice(0, 3).map((product: any, index: number) => (
                      <div key={product.id} className="aspect-square bg-stone-100 rounded-lg overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Category Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center bg-stone-50 rounded-lg p-3">
                      <div className="text-lg font-bold text-stone-900">{category.avgRating}★</div>
                      <div className="text-xs text-stone-600">Avg Rating</div>
                    </div>
                    <div className="text-center bg-stone-50 rounded-lg p-3">
                      <div className="text-lg font-bold text-stone-900">
                        {[...new Set(category.products.map((p: any) => p.brand))].length}
                      </div>
                      <div className="text-xs text-stone-600">Brands</div>
                    </div>
                  </div>

                  {/* Browse Button */}
                  <div className="flex items-center justify-between text-amber-600 group-hover:text-amber-700">
                    <span className="font-semibold">Browse {category.name}</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">Popular Across All Categories</h2>
            <p className="text-lg text-stone-600">Best-selling products from every category</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {categories.map((category) => {
              // Get highest rated product from each category
              const topProduct = category.products.reduce((prev: any, current: any) => 
                (prev.rating || 0) > (current.rating || 0) ? prev : current
              )
              
              return (
                <Link
                  key={category.name}
                  href={`/products/${topProduct.id}`}
                  className="group bg-stone-50 rounded-xl p-4 hover:bg-white hover:shadow-lg transition-all"
                >
                  <div className="aspect-square bg-white rounded-lg overflow-hidden mb-3">
                    <img 
                      src={topProduct.image} 
                      alt={topProduct.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="text-xs text-amber-600 font-semibold mb-1">{category.name}</div>
                  <h3 className="font-bold text-stone-900 text-sm mb-1 truncate">{topProduct.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-amber-600 font-bold text-sm">₦{(topProduct.price / 100).toLocaleString()}</span>
                    <span className="text-xs text-stone-500">{topProduct.rating}★</span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-stone-900 via-amber-900 to-orange-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-xl text-stone-300 mb-8">Our expert team is here to help you find the perfect tech solution</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-amber-700 hover:to-orange-700 transition-all">
              Contact Support
            </Link>
            <Link href="/products" className="border-2 border-stone-300 text-stone-300 px-8 py-3 rounded-lg font-semibold hover:bg-stone-300 hover:text-stone-900 transition-all">
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}