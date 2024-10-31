import { SignUpForm } from "@/components/form/SignUpForm"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export default function Inscription() {
  const user = cookies().has("user_connected")

  if (user) redirect("/")
  return <SignUpForm />
}
