import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import dictionary from '@/app/dictionary/en';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  className="contrasting-bg">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
