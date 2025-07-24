'use client'
import CheckoutForm from '../../components/CheckoutForm'
import { useCart } from '../../utils/cartContext'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function CheckoutPage() {
  const { cart, getCartItemsCount, isLoaded } = useCart()
  const [mounted, setMounted] = useState(false)
  const itemsCount = getCartItemsCount()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Show loading state while cart is loading
  if (!mounted || !isLoaded) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-amber-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-stone-600">Loading checkout...</p>
        </div>
      </div>
    )
  }

  // Redirect to cart if empty
  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-stone-50">
        {/* Header */}
        <div className="bg-gradient-to-br from-stone-900 via-amber-900 to-orange-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl font-black mb-2">Checkout</h1>
              <p className="text-stone-300">Complete your purchase securely</p>
            </div>
          </div>
        </div>

        {/* Empty Cart State */}
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="bg-white rounded-3xl shadow-lg p-12 text-center">
            {/* Empty Cart Icon */}
            <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-stone-100 to-stone-200 rounded-full flex items-center justify-center">
              <svg className="w-16 h-16 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5-5M7 13l-2.5 2.5M17 21a2 2 0 100-4 2 2 0 000 4zM9 21a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
            </div>
            
            <h2 className="text-3xl font-black text-stone-900 mb-4">Your Cart is Empty</h2>
            <p className="text-lg text-stone-600 mb-8 max-w-md mx-auto">
              You need to add items to your cart before you can checkout. Let's find some amazing products for you!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/products" 
                className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-amber-700 hover:to-orange-700 transition-all duration-300 shadow-lg transform hover:scale-105"
              >
                Start Shopping
              </Link>
              <Link 
                href="/cart" 
                className="border-2 border-stone-300 text-stone-700 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-stone-100 transition-all duration-300"
              >
                View Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header with Breadcrumb */}
      <div className="bg-gradient-to-br from-stone-900 via-amber-900 to-orange-900 text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="text-xs sm:text-sm text-stone-300 mb-4 sm:mb-6">
            <Link href="/" className="hover:text-amber-300 transition-colors">Home</Link>
            <span className="mx-1 sm:mx-2">/</span>
            <Link href="/cart" className="hover:text-amber-300 transition-colors">Cart</Link>
            <span className="mx-1 sm:mx-2">/</span>
            <span className="text-white">Checkout</span>
          </nav>

          <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0 gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-2">Secure Checkout</h1>
              <p className="text-stone-300 text-sm sm:text-base">
                {itemsCount} item{itemsCount !== 1 ? 's' : ''} ready for purchase
              </p>
            </div>
            
            {/* Security Badge */}
            <div className="flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-3 py-2 sm:px-4 sm:py-3 self-start sm:self-auto">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-xs sm:text-sm">256-bit SSL</div>
                <div className="text-amber-200 text-xs">Secure Checkout</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:py-6">
          <div className="flex items-center justify-center overflow-x-auto">
            <div className="flex items-center space-x-4 sm:space-x-8 min-w-max">
              {/* Step 1: Cart (Completed) */}
              <div className="flex items-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="ml-2 text-xs sm:text-sm font-semibold text-green-600">Cart</span>
              </div>

              {/* Connector */}
              <div className="w-8 sm:w-16 h-1 bg-amber-200 rounded-full">
                <div className="w-full h-1 bg-amber-500 rounded-full"></div>
              </div>

              {/* Step 2: Checkout (Current) */}
              <div className="flex items-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-amber-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs sm:text-sm">2</span>
                </div>
                <span className="ml-2 text-xs sm:text-sm font-semibold text-amber-600">Checkout</span>
              </div>

              {/* Connector */}
              <div className="w-8 sm:w-16 h-1 bg-stone-200 rounded-full"></div>

              {/* Step 3: Confirmation (Pending) */}
              <div className="flex items-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-stone-200 rounded-full flex items-center justify-center">
                  <span className="text-stone-500 font-bold text-xs sm:text-sm">3</span>
                </div>
                <span className="ml-2 text-xs sm:text-sm font-semibold text-stone-500">Confirmation</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="bg-gradient-to-r from-stone-50 to-amber-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:py-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="flex items-center justify-center sm:justify-start gap-3 p-3 sm:p-0">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-center sm:text-left">
                <div className="font-bold text-stone-900 text-sm">Secure Payment</div>
                <div className="text-stone-600 text-xs">SSL Encrypted</div>
              </div>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-3 p-3 sm:p-0">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-center sm:text-left">
                <div className="font-bold text-stone-900 text-sm">Money Back</div>
                <div className="text-stone-600 text-xs">30-Day Guarantee</div>
              </div>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-3 p-3 sm:p-0">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="text-center sm:text-left">
                <div className="font-bold text-stone-900 text-sm">Fast Delivery</div>
                <div className="text-stone-600 text-xs">Same Day Lagos</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Form */}
      <CheckoutForm />

      {/* Footer Support */}
      <div className="bg-stone-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-lg font-bold mb-4">Need Help with Your Order?</h3>
          <p className="text-stone-300 mb-6">Our customer support team is here to assist you</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+2341234567890" 
              className="flex items-center justify-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-amber-700 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call Support
            </a>
            
            <Link 
              href="/contact" 
              className="flex items-center justify-center gap-2 border-2 border-stone-600 text-stone-300 px-6 py-3 rounded-xl font-semibold hover:border-stone-500 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Email Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}