import type { Metadata } from "next";
import { Carlito, Source_Sans_3, Roboto } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";
import { Providers } from "./providers";

const textFont = Source_Sans_3({
  weight: "400",
  variable: "--font-text",
  subsets: ["latin"],
});

const headingFont = Roboto({
  weight: "400",
  variable: "--font-heading",
  subsets: ["latin"],
});

// const headingFont = localFont({
//       src: './fonts/GeistVF.woff',
//       weight: '400',
//       style: 'normal',
//       variable: "--font-heading",

// })

export const metadata: Metadata = {
  title: "CV - Thusara Senanayake",
  description: "CV - Thusara Senanayake",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${textFont.variable} ${headingFont.variable} ${textFont.className}`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
