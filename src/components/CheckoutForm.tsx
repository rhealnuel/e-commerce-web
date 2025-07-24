'use client'
import { useState } from 'react'
import { useCart } from '../utils/cartContext'

export default function CheckoutForm() {
  const [done, setDone] = useState(false)
  const { clearCart } = useCart()
  function handleSubmit(e: any) {
    e.preventDefault()
    setDone(true)
    clearCart()
  }
  if (done) return <div className="bg-green-100 text-green-700 p-4 rounded">Order placed! Thank you for shopping 🛒</div>
  return (
    <form className="space-y-4 max-w-lg mx-auto bg-white p-6 rounded-lg shadow" onSubmit={handleSubmit}>
      <input className="w-full border p-2 rounded" placeholder="Full Name" required />
      <input className="w-full border p-2 rounded" placeholder="Email" type="email" required />
      <input className="w-full border p-2 rounded" placeholder="Delivery Address" required />
      <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Place Order</button>
    </form>
  )
}
