import React from "react"
import { Input } from "@/components/ui/input"
import { CustomButton } from "@/components/CustomButton"

export function Newsletter() {
  return (
    <section
      className='flex flex-col gap-6 p-2 justify-center items-center'
      aria-label='Inscription à la Newsletter'
    >
      <h2 className='text-xl md:text-3xl font-semibold'>
        Inscription à la newsletter
      </h2>
      <Input placeholder='Rentrez votre email...' className='md:w-3/4' />
      <CustomButton
        ariaLabel='S’inscrire à la newsletter'
        width={50}
        textButton={`S'inscrire`}
        verticalMargin={4}
      />
    </section>
  )
}
