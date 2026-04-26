import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import FloatingHomeButton from "@/components/FloatingHomeButton";
import "./globals.css";


export const metadata: Metadata = {
  title: "Avion AC - Jasa AC Palembang | Instalasi, Servis & Perbaikan",
  description:
    "Layanan AC profesional di Palembang. Kami menyediakan instalasi, servis, pembersihan, dan pengisian freon AC dengan teknisi berpengalaman.",
  keywords: [
    "Service AC Palembang",
    "Jasa AC Palembang",
    "Instalasi AC Palembang",
    "Servis AC",
    "Perbaikan AC",
    "AC maintenance",
  ],
  authors: [{ name: "Avion AC" }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://avionac.id",
    siteName: "Avion AC",
    title: "Avion AC - Jasa AC Palembang",
    description:
      "Layanan AC profesional di Palembang dengan teknisi berpengalaman.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avion AC - Jasa AC Palembang",
    description:
      "Layanan AC profesional di Palembang dengan teknisi berpengalaman.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0284c7" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <FloatingHomeButton />
        <Footer />
      </body>

    </html>
  );
}
