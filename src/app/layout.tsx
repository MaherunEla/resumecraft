"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
    name: z.string(),
    title: z.string(),
    image: z.string(),
    phnNumber: z.string(),
    email: z.string().email({ message: "Invalid email address" }),
    website: z.string().url({ message: "Invalid Website Link" }),
    address: z.string(),
    socialsite: z
      .array(
        z.object({
          value: z.string(),
          url: z.string().url({ message: "Invalid url" }),
        })
      )
      .optional(),
    language: z
      .array(
        z.object({
          languagename: z.string(),
          level: z.string(),
        })
      )
      .optional(),
    experience: z.array(
      z.object({
        company: z.string(),
        logo: z.string(),
        location: z.string(),
        position: z.string(),
        startmonth: z.string(),
        startyear: z.string(),
        endmonth: z.string(),
        endyear: z.string(),
        details: z.string(),
      })
    ),
    project: z.array(
      z.object({
        projecttitle: z.string(),
        projectlink: z.string().url({ message: "Invalid URL" }),
        description: z.string(),
      })
    ),
  });

  type FormValues = z.infer<typeof createFormSchema>;

  const methods = useForm<FormValues>({
    resolver: zodResolver(createFormSchema),
    mode: "onChange",
  });

  console.log(methods);
  return (
    <html lang="en">
      <body className={inter.className}>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit((data) => console.log(data))}>
            {children}
          </form>
        </FormProvider>
      </body>
    </html>
  );
}
