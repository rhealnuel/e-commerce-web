"use client"
import { products } from '../../../data/products'
import ProductDetailClient from '../../../components/ProductDetailClient'
import { notFound, useParams } from 'next/navigation'


export default function ProductDetailPage() {
  const params = useParams()
  const product = products.find(p => p.id === params.id)
  if (!product) return notFound()

  return <ProductDetailClient product={product} />
}
