import React from "react"
import Link from "next/link"
import { Newsletter } from "@/components/Newsletter"
import { Separator } from "@/components/ui/separator"
import { Logo } from "@/components/Logo"

export function Footer() {
  return (
    <>
      <Separator />
      <footer
        className='flex flex-col w-full gap-6 mt-4 justify-between px-2 
      mb-0 md:mb-6 max-w-7xl mx-auto'
      >
        <Newsletter />
        <div className='flex flex-col md:flex-row items-center gap-6 md:justify-between text-xs'>
          <Logo />
          <div className='flex justify-start w-full md:w-auto'>
            <ul className='flex flex-col gap-4'>
              <li>
                <Link href={"/contact"}>Nous Contacter</Link>
              </li>
              <li>
                <Link href={"/termes"}>Termes et conditions</Link>
              </li>
              <li>
                <Link href={"/confidentialite"}>
                  Politiques de confidentialité
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='text-center mt-2 md:mt-0'>
          <small>
            Copyright © 2024 MySite. Tous droits réservés. Realisé by{" "}
            <Link
              className='underline'
              href={"https://www.linkedin.com/in/sebastien-savan-76597040/"}
            >
              @babbbass
            </Link>
          </small>
        </div>
      </footer>
    </>
  )
}
