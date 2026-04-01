import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Online Benefit Helper — Find Benefits You May Qualify For",
  description:
    "We help Americans navigate benefit programs including disability, legal assistance, senior services, and insurance options.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-geist-sans)] bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
