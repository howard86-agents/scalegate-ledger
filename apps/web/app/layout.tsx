import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Workspace Template",
  description: "Maison-style full-stack starter for Howard agent projects.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className={inter.variable} lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
