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
    <html lang="en" className="h-full">
      <Head>
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <body
        className={`${inter.className} flex items-center mx-96 flex-col min-h-dvh justify-between`}
      >
        <nav className="flex justify-between items-center mt-10 w-full  max-w-custom">
          <span className="text-2xl">
            {/* <a className="expanding-underline" href="/">
              Azim Siddiki
            </a> */}
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
              {/* <a className="expanding-underline" href="/projects">
                Projects
              </a> */}
              <Link className="expanding-underline" href="/projects">
                Projects
              </Link>
            </li>
            <li>
              <Link className="expanding-underline" href="/cv">
                CV
              </Link>
            </li>
            <li>
              {/* <a className="expanding-underline" href="/contact">
                <Icon name="email" />
              </a> */}
              <Link className="expanding-underline" href="/contact">
                <Icon name="email" />
              </Link>
            </li>
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </nav>
        {children}

        <footer className="mb-10">
          <p>&copy; {new Date().getFullYear()} </p>
        </footer>
      </body>
    </html>
  );
}
