"use client"
import React from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import emailjs from "emailjs-com"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { CustomButton } from "@/components/CustomButton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { toast } from "sonner"

const formSchema = z.object({
  name: z.string().min(2, "Le nom doit comporter au moins 2 caractères."),
  email: z.string().email("Adresse email invalide."),
  message: z
    .string()
    .min(10, "Le message doit comporter au moins 10 caractères."),
})

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
    },
  })

  const onSubmit = async (formValues: z.infer<typeof formSchema>) => {
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID || "",
        {
          fromName: formValues.name,
          fromEmail: formValues.email,
          message: formValues.message,
          toName: process.env.NEXT_PUBLIC_RECEIVER_NAME,
        },
        process.env.NEXT_PUBLIC_API_KEY_EMAIL
      )

      toast.success(
        "Votre message a bien été envoyé. Nous vous recontacterons dans les meilleurs délais."
      )
    } catch (error) {
      toast.error(
        "Votre message n'a pas pu être envoyé. Veuillez réessayer ultérieurement."
      )
    }
  }

  return (
    <Card className='border-t-1 border-t-slate-300 p-4 mt-24 bg-transparent w-min-[310px] w-1/2'>
      <CardHeader></CardHeader>
      <CardContent className='p-0 '></CardContent>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
          {/* <div className='flex justify-between gap-4 w-full'> */}
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormControl>
                  <Input placeholder='Votre nom' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* </div> */}
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
          <FormField
            control={form.control}
            name='message'
            render={({ field }) => (
              <>
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder='Entrez votre message...'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </>
            )}
          />
          <div className='w-full flex justify-end'>
            <CustomButton
              type='submit'
              textButton='Envoyer'
              className='rounded-lg m-0'
            />
          </div>
        </form>
      </Form>
    </Card>
  )
}

export default ContactForm
