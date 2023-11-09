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
  const createFormSchema = z.object({
    name: z.string().min(1, "Name is required"),
    title: z.string().min(1, "Title is required"),
    image: z.string().min(1, "Image is Required"),
    phnNumber: z
      .string()
      .min(1, "Phone Number is Required")
      .length(11, "Must Contain 11 Digit"),
    email: z
      .string()
      .min(1, "Email is Required")
      .email({ message: "Invalid email address" }),
    website: z
      .string()
      .min(1, "Website Link is Required")
      .url({ message: "Invalid Website Link" }),
    address: z.string().min(1, "Address is Required "),
    socialsite: z.array(
      z
        .object({
          value: z.string(),
          url: z
            .string()
            .min(1, "Site Url Required")
            .url({ message: "Invalid url" }),
        })
        .optional()
    ),

    language: z.array(
      z
        .object({
          languagename: z.string().min(1, "Language Name is Required"),
          level: z.string(),
        })
        .optional()
    ),

    experience: z.array(
      z
        .object({
          company: z.string().min(1, "Company Name is Requird"),
          logo: z.string().optional(),
          location: z.string().min(1, "location is Required"),
          position: z.string().min(1, "Position is Required"),
          startmonth: z.string().min(1, "Start Month  is Required"),
          startyear: z.string().min(1, "Start Year is Required"),
          endmonth: z.string().min(1, "End Month is Required"),
          endyear: z.string().min(1, "End Year  is Required"),
          details: z.string().min(1, "Details is Required"),
        })
        .optional()
    ),
    project: z.array(
      z
        .object({
          projecttitle: z.string().min(1, "Project Title is Required"),
          projectlink: z
            .string()
            .min(1, "Project link is Required")
            .url({ message: "Invalid URL" }),
          description: z.string().optional(),
        })
        .optional()
    ),
    education: z.array(
      z
        .object({
          websitelink: z.string().min(1, "Website Link is Required"),
          year: z.string().min(1, "Year is Required"),
          title: z.string().min(1, "Title is Required"),
        })
        .optional()
    ),
    skills: z.array(
      z
        .object({
          skillsetname: z.string().min(1, "Skill Set Name  is Required"),
          skill: z.string().array().min(1, "Skill is Required"),
        })
        .optional()
    ),
  });

  type FormValues = z.infer<typeof createFormSchema>;
  // const methods = useForm<FormValues>();

  const methods = useForm<FormValues>({
    resolver: zodResolver(createFormSchema),
    // mode: "onChange",
  });
  // type FormValues = {
  //   name: string;
  //   title: string;
  //   image: string;
  //   phnNumber: string;
  //   email: string;
  //   website: string;
  //   address: string;
  //   socialsite: any;
  //   language: any;
  //   experience: any;
  //   project: any;
  //   education: any;
  //   skills: any;
  // };
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
    // const socialsitedata = socialsite.json();
    // console.log({ socialsitedata });

    const language = await fetch(`api/languagee/${profiledata.profile.id}`, {
      method: "POST",
      body: JSON.stringify(data.language),
    });
    const languagedata = language.json();
    console.log({ languagedata });
    console.log(data.experience);
    const experience = await fetch(`api/experience/${profiledata.profile.id}`, {
      method: "POST",
      body: JSON.stringify(data.experience),
    });
    // const experiencedata = experience.json();
    // console.log({ experiencedata });

    const project = await fetch(`api/project/${profiledata.profile.id}`, {
      method: "POST",
      body: JSON.stringify(data.project),
    });

    // const projectdata = project.json();
    // console.log({ projectdata });

    const education = await fetch(`api/education/${profiledata.profile.id}`, {
      method: "POST",
      body: JSON.stringify(data.education),
    });

    // const educationdata = education.json();
    // console.log({ educationdata });
    const skill = await fetch(`api/skillp/${profiledata.profile.id}`, {
      method: "POST",
      body: JSON.stringify(data.skills),
    });

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
            <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
              {children}
            </form>
          </FormProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
