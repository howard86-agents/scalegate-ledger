import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import { Providers } from "./providers";

const notoSansTc = Noto_Sans_TC({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-noto-sans-tc",
});

export const metadata: Metadata = {
  title: "ScaleGate Ledger｜營運工作台",
  description: "地磅、進出場與掩埋作業的可追溯營運工作台。",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className={notoSansTc.variable} lang="zh-Hant">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
