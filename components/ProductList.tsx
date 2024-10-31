import React from "react"
import { Product } from "@/components/Product"

export function ProductList({ products, addToCart }) {
  return (
    <div className='product-list'>
      {products.map((product) => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  )
}
