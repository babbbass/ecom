import { PageWrapper } from "@/components/PageWrapper"

export default function Home() {
  return (
    <PageWrapper>
      <div className='flex flex-col w-full max-w-7xl mx-auto items-center md:p-6 h-ful font-[family-name:var(--font-geist-sans)]'>
        <h1 className='text-xl md:text-4xl font-bold mb-10'>
          Bienvenue sur notre E-commerce
        </h1>
        {/* <ProductList products={products} addToCart={addToCart} />
      <Cart cartItems={cart} removeFromCart={removeFromCart} />
      <Checkout cartItems={cart} /> */}
      </div>
    </PageWrapper>
  )
}
