import React from "react"
import { SignInForm } from "@/components/form/SignInForm"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export default function Connexion() {
  const user = cookies().has("user_connected")
  if (user) redirect("/")

  return <SignInForm />
}
