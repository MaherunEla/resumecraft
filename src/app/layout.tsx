"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {
  QueryClientProvider,
  QueryClient,
  useMutation,
} from "@tanstack/react-query";
import { useForm, FormProvider, UseFormProps } from "react-hook-form";
import { z } from "zod";
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const createFormSchema = z.object({
  //   name: z.string(),
  //   title: z.string(),
  //   image: z.string(),
  //   phnNumber: z.string(),
  //   email: z.string().email({ message: "Invalid email address" }),
  //   website: z.string().url({ message: "Invalid Website Link" }),
  //   address: z.string(),
  //   socialsite: z.array(
  //     z.object({
  //       value: z.string(),
  //       url: z.string().url({ message: "Invalid url" }),
  //     })
  //   ),

  //   language: z.array(
  //     z.object({
  //       languagename: z.string(),
  //       level: z.string(),
  //     })
  //   ),

  //   experience: z.array(
  //     z.object({
  //       company: z.string(),
  //       logo: z.string(),
  //       location: z.string(),
  //       position: z.string(),
  //       startmonth: z.string(),
  //       startyear: z.string(),
  //       endmonth: z.string(),
  //       endyear: z.string(),
  //       details: z.string(),
  //     })
  //   ),
  //   project: z.array(
  //     z.object({
  //       projecttitle: z.string(),
  //       projectlink: z.string().url({ message: "Invalid URL" }),
  //       description: z.string(),
  //     })
  //   ),
  //   education: z.array(
  //     z.object({
  //       websitelink: z.string(),
  //       year: z.string(),
  //       title: z.string(),
  //     })
  //   ),
  //   skills: z.array(
  //     z.object({
  //       skillsetname: z.string().array(),
  //       skill: z.string().array(),
  //     })
  //   ),
  // });

  // type FormValues = z.infer<typeof createFormSchema>;
  const methods = useForm<FormValues>();

  // const methods = useForm<FormValues>({
  //   resolver: zodResolver(createFormSchema),
  //   mode: "onChange",
  // });
  type FormValues = {
    name: string;
    title: string;
    image: string;
    phnNumber: string;
    email: string;
    website: string;
    address: string;
    socialsite: any;
    language: any;
    experience: any;
    project: any;
    education: any;
    skills: any;
  };
  console.log(methods);
  // const onSubmit = (data: any) => console.log({ data });
  const query = new QueryClient();
  const onSubmit = async (data: FormValues) => {
    console.log({ data });

    const profileres = await fetch("api/profile", {
      method: "POST",
      body: JSON.stringify({
        name: data.name,
        title: data.title,
        image: data.image,
      }),
    });

    const profiledata = await profileres.json();
    console.log(profiledata.profile.id);

    const contact = await fetch(`api/contact/${profiledata.profile.id}`, {
      method: "POST",
      body: JSON.stringify({
        phnNumber: data.phnNumber,
        email: data.email,
        website: data.website,
        address: data.address,
      }),
    });

    console.log({ contact });
    console.log(data.socialsite);

    const socialsite = await fetch(`api/socialsite/${profiledata.profile.id}`, {
      method: "POST",
      body: JSON.stringify(data.socialsite),
    });
    const socialsitedata = socialsite.json();
    console.log({ socialsitedata });

    const language = await fetch(`api/language/${profiledata.profile.id}`, {
      method: "POST",
      body: JSON.stringify(data.language),
    });
    const languagedata = language.json();
    console.log({ languagedata });

    const res = await fetch("api/form", {
      method: "POST",
      body: JSON.stringify(data),
    });
  };

  // query.setMutationDefaults(['onSubmit'],{
  //   mutationFn:onSubmit,

  // })
  // const mutation = useMutation ({mutationKey : ['onSubmit']})
  // mutation.mutate(data)
  // const { mutate } = useMutation({
  //   mutationFn: onSubmit,

  // });

  // const onSubmitForm = (newValue: any) => {
  //   mutate(newValue);
  // };

  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider client={query}>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
          </FormProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
