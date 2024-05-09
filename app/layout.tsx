import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../theme/globals.css";
import Icon from "@/components/Icon";
import ThemeToggle from "@/components/ThemeToggle";
import Head from "next/head";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Azim Siddiki",
  description: "Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <body
        className={`${inter.className} flex items-center flex-col min-h-dvh justify-between`}
      >
        <nav className="flex justify-between items-center mt-10 w-full  max-w-custom px-2">
          <span className="md:text-2xl">
            <Link className="expanding-underline" href="/">
              Azim Siddiki
            </Link>
          </span>
          <ul className="grid grid-flow-col gap-4 items-center">
            <li>
              <Link className="expanding-underline" href="/skills">
                Skills
              </Link>
            </li>
            <li>
              <Link className="expanding-underline" href="/projects">
                Projects
              </Link>
            </li>
            <li>
              <Link
                className="expanding-underline"
                href="/Azims_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                CV
              </Link>
            </li>
            <li>
              <Link
                className="expanding-underline"
                href="mailto:azimsiddiki@gmail.com"
              >
                <Icon name="email" />
              </Link>
            </li>
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </nav>
        {children}

        <footer className="my-10">
          <p>&copy; {new Date().getFullYear()} </p>
        </footer>
      </body>
    </html>
  );
}
