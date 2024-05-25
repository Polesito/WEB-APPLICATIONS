import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextJS and React Demo",
  description: "A simple demo of the basic features of NextJS and React",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="h-8 bg-blue-600 text-white flex flex-row items-center px-3 gap-4 justify-between">
          <Link href="/">
            <h1 className="m-0">Demo</h1>
          </Link>
          <Link href="/users">Users</Link>
          <Link href="/products">Products</Link>
          <div className="flex-1"></div>
          <div>login</div>
        </header>
        {children}
        <footer></footer>
      </body>
    </html>
  );
}
