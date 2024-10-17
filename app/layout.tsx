import type { Metadata } from "next";
import { Carlito, Source_Sans_3, Roboto } from "next/font/google";
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
