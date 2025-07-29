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
  title: "TECHROMA INDUSTRIES - Premium Pigments & Color Solutions | Global Export",
  description: "Leading manufacturer and exporter of premium organic and inorganic pigments for paints, coatings, textiles, plastics, and printing industries worldwide.",
  keywords: "pigments, organic pigments, inorganic pigments, color solutions, export, paints, coatings, textiles, plastics, printing inks",
  authors: [{ name: "Techroma" }],
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/Techroma Logo.png",
    shortcut: "/Techroma Logo.png",
    apple: "/Techroma Logo.png",
  },
  openGraph: {
    title: "TECHROMA INDUSTRIES - Premium Pigments & Color Solutions",
    description: "Leading manufacturer and exporter of premium organic and inorganic pigments for industries worldwide.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/Techroma Logo.png",
        width: 1200,
        height: 630,
        alt: "Techroma Logo",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
