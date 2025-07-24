import { products } from '../data/products'
import { useCart } from '../utils/cartContext'

export default function CartItem({ id, quantity }: { id: string; quantity: number }) {
  const product = products.find(p => p.id === id)
  const { removeFromCart } = useCart()
  if (!product) return null
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center gap-4">
        <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded" />
        <div>
          <h4 className="font-semibold">{product.name}</h4>
          <p className="text-gray-500">Qty: {quantity}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <p className="text-blue-600 font-bold">₦{((product.price * quantity) / 100).toLocaleString()}</p>
        <button className="text-red-600" onClick={() => removeFromCart(id)}>Remove</button>
      </div>
    </div>
  )
}
