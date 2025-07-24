import Link from 'next/link'

export default function ProductCard({ product }: { product: any }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg p-4 flex flex-col">
      <img src={product.image} alt={product.name} className="h-40 w-full object-cover rounded-lg mb-4" />
      <h3 className="font-semibold text-lg">{product.name}</h3>
      <p className="text-blue-600 font-bold mt-2">₦{(product.price / 100).toLocaleString()}</p>
      <p className="text-gray-500 mt-1 flex-1">{product.description}</p>
      <Link href={`/products/${product.id}`} className="mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 text-center">View Details</Link>
    </div>
  )
}
