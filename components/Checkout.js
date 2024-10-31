import React from "react"

export function Checkout({ cartItems }) {
  const handlePayment = () => {
    // Intégration avec une API de paiement comme Stripe
    console.log("Paiement en cours...")
  }

  return (
    <div>
      <h2>Paiement</h2>
      <button onClick={handlePayment}>Payer</button>
    </div>
  )
}
