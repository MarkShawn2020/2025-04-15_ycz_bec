import type { Metadata } from "next";
import "./globals.css";
import { inter, lato, bebasNeue } from "./fonts";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "BEC (SYA) | High School Study Programs in France, Italy & Spain",
  description: "BEC (SYA) offers yearlong and semester study abroad homestay programs for high school sophomores, juniors and seniors to Spain, Italy, France!",
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
      </body>
    </html>
  );
}
