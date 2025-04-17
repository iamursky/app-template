import "./globals.css";

import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto-sans",
});

export const metadata: Metadata = {
  description: "Website description",
  title: "Website Title",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={`${notoSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
