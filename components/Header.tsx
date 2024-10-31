"use client"
import React, { useState } from "react"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
// import { ShoppingBagIcon } from "./cart/ShoppingBag"
import { MenuIcon, XIcon } from "lucide-react"
import { Logo } from "@/components/Logo"
import { useStoreCart } from "@/stores/cart.store"
import { UserAccountSelect } from "@/components/user/UserAccountSelect"

export function Header({ user }: { user: { username: string } | null }) {
  const [isOpen, setIsOpen] = useState(false)
  const { items } = useStoreCart()

  const displayCount = items.length > 0 ? true : false
  return (
    <>
      <header className='w-full m-0 p-0'>
        <nav className='flex h-10 justify-between items-center pt-6 max-w-7xl mx-auto text-lg md:text-xl'>
          <Logo />
          <div className='md:hidden relative flex items-center justify-between'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='md:hidden block text-gray-600 cursor-pointer'
            >
              <MenuIcon />
            </button>
            {displayCount && (
              <div
                className={`absolute top-3 -right-1 flex items-center justify-center w-3 h-3 rounded-full bg-blue-600 text-white text-xs`}
              />
            )}
          </div>
          <div
            className={`flex pt-8 flex-1 flex-col px-2 w-full fixed top-0 left-0 h-screen md:h-full   shadow-lg z-10 transform transition-transform duration-300 ease-in-out bg-slate-50
                      ${isOpen ? "translate-x-0" : "-translate-x-full"} 
                      md:static md:transform-none md:translate-x-0 md:flex md:gap-4 md:flex-row md:justify-end md:pt-0  md:shadow-none`}
          >
            {/* Logo for smartphone */}
            <div className='flex md:hidden justify-between'>
              <Link
                href='/'
                className=' w-full'
                onClick={() => setIsOpen(false)}
              >
                <span className='text-xl md:text-2xl font-bold italic'>
                  Easy<span className='text-blue-600'>Coques</span>
                </span>
              </Link>
              <Link href='' onClick={() => setIsOpen(false)}>
                <XIcon className='w-6 h-6 cursor-pointer text-blue-600 md:hidden' />
              </Link>
            </div>

            <Separator className='md:hidden' />
            <div className='flex flex-col flex-1 md:flex-row gap-1 italic text-xl items-center mt-5 md:mt-0 justify-start md:justify-between'>
              <div className='flex flex-col md:flex-row gap-4 md:mx-auto'>
                <Link
                  href='/products/coques/iphone'
                  onClick={() => setIsOpen(false)}
                  className='hover:text-blue-600/90'
                >
                  <span>Nos coques</span>
                </Link>
                <Link
                  href={{
                    pathname: "/products/trainers",
                  }}
                  onClick={() => setIsOpen(false)}
                  className=' hover:text-blue-600/90'
                >
                  <span>Nos trainers</span>
                </Link>
              </div>
              <Link
                href='/cart'
                onClick={() => setIsOpen(false)}
                className='flex'
              >
                <span className='mr-2 md:hidden'>panier</span>
                {/* <ShoppingBagIcon className='mr-1' /> */}
              </Link>
              <UserAccountSelect user={user ? user.username : null} />
            </div>
          </div>
        </nav>
      </header>
      <Separator />
    </>
  )
}
