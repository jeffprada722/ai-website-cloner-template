import type { Metadata } from "next";
import { Montserrat, Nunito, Roboto_Mono } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["500", "800"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bookkeeper360: Business Bookkeepers & Bookkeeping Services",
  description:
    "Bookkeeper360 offers expert bookkeeping services for QuickBooks and Xero, providing bookkeeping, accounting, and advisory solutions for small to medium-sized businesses.",
  openGraph: {
    title: "Bookkeeper360: Business Bookkeepers & Bookkeeping Services",
    description:
      "Bookkeeper360 offers expert bookkeeping services for QuickBooks and Xero, providing bookkeeping, accounting, and advisory solutions for small to medium-sized businesses.",
  },
  icons: {
    icon: "/seo/favicon.ico",
    apple: "/seo/apple-touch-icon-180x180.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${nunito.variable} ${robotoMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
