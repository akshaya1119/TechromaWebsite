import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { QueryProvider } from "@/lib/queryClient";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TECHROMA - The Science Behind Progress | High-Performance Chemical Solutions",
  description: "Delivering high-performance chemical solutions, designed with precision and built on expertise. Techroma creates innovative solutions for polymer manufacturing, inks, coatings, specialty chemicals, and plastics industries.",
  keywords: "chemical solutions, high-performance chemicals, polymer manufacturing, specialty chemicals, inks and coatings, plastics, ADMT, 2,5 DCPPD, precision engineering, innovation",
  authors: [{ name: "Techroma" }],
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/techroma-logo.png",
    shortcut: "/techroma-logo.png",
    apple: "/techroma-logo.png",
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/techroma-logo.png",
      },
      {
        rel: "icon",
        type: "image/png", 
        sizes: "16x16",
        url: "/techroma-logo.png",
      },
    ],
  },
  openGraph: {
    title: "TECHROMA - The Science Behind Progress",
    description: "Delivering high-performance chemical solutions, designed with precision and built on expertise.",
    type: "website",
    locale: "en_US",
    siteName: "Techroma",
    images: [
      {
        url: "/techroma-logo.png",
        width: 1200,
        height: 630,
        alt: "Techroma Logo - The Science Behind Progress",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TECHROMA - The Science Behind Progress",
    description: "Delivering high-performance chemical solutions, designed with precision and built on expertise.",
    images: ["/techroma-logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/techroma-logo.png" type="image/png" />
        <link rel="shortcut icon" href="/techroma-logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/techroma-logo.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryProvider>
          {children}
          <Toaster />
        </QueryProvider>
      </body>
    </html>
  );
}
