import "./globals.css";
import Link from "next/link";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-body",
});

const bloverly = localFont({
  src: [
    {
      path: "./fonts/BLOVERLY.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/BLOVERLY.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-display",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen text-gray-900 ${poppins.variable} ${bloverly.variable} antialiased`}
      >
        <header className="bg-gradient-to-b from-black to-brandnavy">
          <div className="h-20 flex items-center justify-between px-10">
            <h1 className="font-display text-5xl text-white">
              <Link href="/"> THE SPIIT ATELIER</Link>
            </h1>
            <nav className="flex gap-6 text-sm">
              <Link className="text-white hover:text-brandlightpink" href="/shop">
                Shop
              </Link>
              <Link className="text-white hover:text-brandlightpink" href="/book-debut">
                Book Debut
              </Link>
              <Link className="text-white hover:text-brandlightpink" href="/about">
                About
              </Link>
              <Link
                className="text-white hover:text-brandlightpink"
                href="/contact"
              >
                Contact
              </Link>
            </nav>
          </div>
        </header>

        <main className="w-full">{children}</main>
        <footer className="mt-16 border-t border-gray-200 p-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} The Spirit Atelier
        </footer>
      </body>
    </html>
  );
}
