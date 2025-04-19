import type { Metadata } from "next";
import "./globals.css";
import { inter, lato, bebasNeue } from "./fonts";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "BEC | Boston Education Consulting | Aboard Study Programs in USA & China",
  description: "BEC offers premier study abroad programs for high school students to USA & China with personalized education consulting and homestay experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${lato.variable} ${bebasNeue.variable}`}>
      <body className="min-h-screen flex flex-col" suppressHydrationWarning>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
