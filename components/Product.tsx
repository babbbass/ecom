// components/ProductCard.js
import React from "react"
import Image from "next/image"

export function Product({ product, addToCart }) {
  return (
    <div className='product-card'>
      <Image
        height={200}
        width={200}
        src={product.image}
        alt={product.title}
        className='product-image'
      />
      <h3>{product.title}</h3>
      <p>{product.price} €</p>
      <button onClick={() => addToCart(product)}>Ajouter au panier</button>
    </div>
  )
}
