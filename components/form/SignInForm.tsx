"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { CustomButton } from "@/components/CustomButton"
import Link from "next/link"
// import { loginUser } from "@/api/fetchStrapi"
import { useRouter } from "next/navigation"

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, {
    message: "Le mot de passe doit avoir au moins 6 caractères.",
  }),
})
export function SignInForm() {
  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // const user = await loginUser(values)
    console.log(values)
    const user = null
    if (user) {
      router.push("/products/trainers")
    }
  }

  return (
    <div className='bg-transparent flex flex-col gap-1 border-0 w-full'>
      <h2 className='w-full text-center text-xl md:text-2xl mb-6'>
        {" "}
        Vos informations de connexion
      </h2>
      <div className='w-full flex justify-center'>
        <Card className='border-t-1 border-t-slate-300 p-4 bg-transparent w-min-[310px] w-1/2'>
          <CardHeader></CardHeader>
          <CardContent className='p-0 '>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='space-y-6'
              >
                <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                    <>
                      <FormItem>
                        <FormControl>
                          <Input placeholder='Entrez votre email' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    </>
                  )}
                />
                <div className='flex justify-between gap-4 w-full'>
                  <FormField
                    control={form.control}
                    name='password'
                    render={({ field }) => (
                      <FormItem className='w-full'>
                        <FormControl>
                          <Input placeholder='Mot de passe' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className='w-full flex justify-end'>
                  <CustomButton
                    type='submit'
                    textButton='Se connecter'
                    className='rounded-lg m-0'
                  />
                </div>
              </form>
            </Form>
            <p className='mt-5 text-right'>
              Pas encore de compte?{" "}
              <Link
                href={"/inscription"}
                className='text-blue-600 hover:underline font-semibold'
              >
                {`S'inscrire`}{" "}
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
