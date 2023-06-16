// Imports

import "./globals.css";
import { Cabin } from "next/font/google";
import Link from "next/link";
import kv from "@vercel/kv";
import PageViews from "@/app/components/PageViews";
import { ClerkProvider, SignIn } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

// Fonts

const cabin = Cabin({ subsets: ["latin"] });

// Meta Data
export const metadata = {
  title: "Mikes Personal Blog",
  description: "Personal Blog by Mike Wood including Destiny 2 builds",
  robots: "noindex",
  openGraph: {
    title: "Mikes Blog with Destiny 2 Builds",
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const user = await currentUser();

  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: {
          colorPrimary: "rgb(83, 165, 237)",
        },
      }}
    >
      <html lang="en">
        <body className={cabin.className}>
          <div className="heroImgContainer">
            <nav className="mainNav container">
              <div className="nav-item">
                <Link href="/">
                  <h3 className="logo">MW</h3>
                </Link>
              </div>
              <div className="navSecond">
                <Link className="nav-link" href="/">
                  Home
                </Link>
                <Link className="nav-link" href="/about">
                  About
                </Link>
                <Link className="nav-link" href="/blog">
                  Builds
                </Link>
                {user ? (
                  <UserButton afterSignOutUrl="/" />
                ) : (
                  <Link href="/sign-in#signIn" className="nav-link">
                    Sign In
                  </Link>
                )}
              </div>
            </nav>
            <div className="filter"></div>
          </div>
          <div className="mainWrapper">{children}</div>
          <div className="footer">
            <div></div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
