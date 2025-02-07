import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./multiy-components/footer-2";
import Providers from "./providers";
import {
  ClerkProvider,
} from '@clerk/nextjs'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Hammad's Hackathon",
  description: "Hammad's Hackathon In Next.Js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       
       <Providers>
        {children}
        <Footer />
        </Providers>
      </body>
    </html>
    </ClerkProvider>
  );
}
