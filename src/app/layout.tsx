"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useForm, FormProvider } from "react-hook-form";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const methods = useForm();
  // console.log(methods);
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
