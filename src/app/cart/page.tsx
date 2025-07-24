'use client'
import { useCart } from '../../utils/cartContext'
import CartItem from '../../components/CartItem'
import Link from 'next/link'
import { products } from '../../data/products'

export default function CartPage() {
  const { 
    cart, 
    clearCart, 
    getCartSubtotal, 
    getCartSavings, 
    getCartItemsCount, 
    getShippingCost, 
    getFinalTotal,
    isEligibleForFreeShipping,
    getAmountForFreeShipping 
  } = useCart()

  const subtotal = getCartSubtotal()
  const savings = getCartSavings()
  const shipping = getShippingCost()
  const total = getFinalTotal()
  const itemsCount = getCartItemsCount()
  const isFreeShipping = isEligibleForFreeShipping()
  const amountForFreeShipping = getAmountForFreeShipping()

  // Get recommended products (products not in cart)
  const cartProductIds = cart.map(item => item.id)
  const recommendedProducts = products
    .filter(product => !cartProductIds.includes(product.id) && product.inStock)
    .slice(0, 4)

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-stone-50">
        {/* Empty Cart State */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-white rounded-3xl shadow-lg p-12 text-center">
            {/* Empty Cart Icon */}
            <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-stone-100 to-stone-200 rounded-full flex items-center justify-center">
              <svg className="w-16 h-16 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5-5M7 13l-2.5 2.5M17 21a2 2 0 100-4 2 2 0 000 4zM9 21a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
            </div>
            
            <h1 className="text-3xl font-black text-stone-900 mb-4">Your Cart is Empty</h1>
            <p className="text-lg text-stone-600 mb-8 max-w-md mx-auto">
              Looks like you haven't added anything to your cart yet. Start shopping to find amazing deals!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/products" 
                className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-amber-700 hover:to-orange-700 transition-all duration-300 shadow-lg transform hover:scale-105"
              >
                Start Shopping
              </Link>
              <Link 
                href="/categories" 
                className="border-2 border-stone-300 text-stone-700 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-stone-100 transition-all duration-300"
              >
                Browse Categories
              </Link>
            </div>
          </div>

          {/* Recommended Products */}
          {recommendedProducts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-stone-900 mb-8 text-center">You Might Like These</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {recommendedProducts.map(product => (
                  <Link
                    key={product.id}
                    href={`/products/${product.id}`}
                    className="group bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all"
                  >
                    <div className="aspect-square bg-stone-100 rounded-lg overflow-hidden mb-3">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <h3 className="font-semibold text-stone-900 text-sm mb-2 line-clamp-2">{product.name}</h3>
                    <p className="text-amber-600 font-bold">₦{(product.price / 100).toLocaleString()}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-stone-900 via-amber-900 to-orange-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl sm:text-4xl font-black mb-2">Shopping Cart</h1>
              <p className="text-stone-300">
                {itemsCount} item{itemsCount !== 1 ? 's' : ''} in your cart
              </p>
            </div>
            
            {/* Continue Shopping Link */}
            <Link 
              href="/products"
              className="hidden sm:flex items-center gap-2 text-amber-300 hover:text-white transition-colors font-semibold"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            {/* Free Shipping Progress */}
            {!isFreeShipping && amountForFreeShipping > 0 && (
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-6 mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                      <path d="M3 4a1 1 0 00-1 1v1a1 1 0 001 1h1l2 7a1 1 0 001 1h7a1 1 0 001-1L13.5 7H5.414l-.293-.707A1 1 0 004.414 6H3a1 1 0 01-1-1V4z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-amber-800">Free Shipping Available!</h3>
                    <p className="text-amber-700 text-sm">
                      Add ₦{(amountForFreeShipping / 100).toLocaleString()} more to get free shipping
                    </p>
                  </div>
                </div>
                <div className="w-full bg-amber-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-amber-500 to-orange-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${Math.min((subtotal / 5000000) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>
            )}

            {isFreeShipping && (
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-green-800">Congratulations! You qualify for free shipping</h3>
                  </div>
                </div>
              </div>
            )}

            {/* Cart Items Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-stone-900">Cart Items</h2>
              <button 
                onClick={clearCart}
                className="text-red-600 hover:text-red-700 font-semibold text-sm flex items-center gap-2 hover:bg-red-50 px-3 py-2 rounded-lg transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Clear Cart
              </button>
            </div>

            {/* Cart Items List */}
            <div className="space-y-4">
              {cart.map(item => (
                <CartItem key={item.id} id={item.id} quantity={item.quantity} />
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-4">
              <h2 className="text-xl font-bold text-stone-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-stone-600">Subtotal ({itemsCount} items)</span>
                  <span className="font-semibold">₦{(subtotal / 100).toLocaleString()}</span>
                </div>

                {savings > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Total Savings</span>
                    <span className="font-semibold">-₦{(savings / 100).toLocaleString()}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span className="text-stone-600">Shipping</span>
                  <span className="font-semibold">
                    {shipping === 0 ? (
                      <span className="text-green-600">Free</span>
                    ) : (
                      `₦${(shipping / 100).toLocaleString()}`
                    )}
                  </span>
                </div>

                <div className="border-t border-stone-200 pt-4">
                  <div className="flex justify-between text-lg">
                    <span className="font-bold text-stone-900">Total</span>
                    <span className="font-black text-2xl text-stone-900">₦{(total / 100).toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Checkout Button */}
              <Link 
                href="/checkout" 
                className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-4 rounded-2xl font-bold text-lg hover:from-amber-700 hover:to-orange-700 transition-all duration-300 shadow-lg transform hover:scale-[1.02] text-center block mb-4"
              >
                Proceed to Checkout
              </Link>

              {/* Continue Shopping */}
              <Link 
                href="/products"
                className="w-full border-2 border-stone-300 text-stone-700 py-3 rounded-xl font-semibold hover:bg-stone-50 transition-all duration-300 text-center block"
              >
                Continue Shopping
              </Link>

              {/* Security Badge */}
              <div className="mt-6 p-4 bg-stone-50 rounded-xl">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-semibold text-stone-800">Secure Checkout</span>
                </div>
                <p className="text-xs text-stone-600">Your payment information is encrypted and secure.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Products */}
        {recommendedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-stone-900 mb-8">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {recommendedProducts.map(product => (
                <Link
                  key={product.id}
                  href={`/products/${product.id}`}
                  className="group bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1"
                >
                  <div className="aspect-square bg-stone-100 rounded-lg overflow-hidden mb-3">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <h3 className="font-semibold text-stone-900 text-sm mb-2 line-clamp-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <p className="text-amber-600 font-bold">₦{(product.price / 100).toLocaleString()}</p>
                    <button className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full hover:bg-amber-200 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}