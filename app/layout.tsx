"use client"
import "./globals.css";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import Header from "../components/header";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-body",
});

const bloverly = localFont({
  src: [
    {
      path: "../fonts/BLOVERLY.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/BLOVERLY.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-display",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`min-h-screen antialiased ${poppins.variable} ${bloverly.variable}`}>
        <Header /> {/* 👈 Now the header is included on every page */}
        {children}
      </body>
    </html>
  );
}
