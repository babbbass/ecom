import React from "react"

export function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col max-w-7xl mx-auto justify-center items-center flex-1 w-full'>
      {children}
    </div>
  )
}
