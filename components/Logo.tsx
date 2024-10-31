import React from "react"
import Link from "next/link"

export function Logo() {
  return (
    <div className='px-2'>
      <Link href='/'>
        <span className='text-xl md:text-2xl font-bold italic'>
          Easy<span className='text-blue-600'>Coques</span>
        </span>
      </Link>
    </div>
  )
}
