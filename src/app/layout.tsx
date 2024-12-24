import { ThemeProvider } from '@/context/ThemeContext';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: 'Your Name - Creative Developer',
    template: '%s | Your Name'
  },
  description: 'Creative developer building beautiful digital experiences',
  keywords: ['developer', 'portfolio', 'web development', 'frontend', 'react', 'next.js'],
  openGraph: {
    title: 'Your Name - Creative Developer',
    description: 'Creative developer building beautiful digital experiences',
    url: 'https://yourwebsite.com',
    siteName: 'Your Name Portfolio',
    images: [
      {
        url: '/og-image.png', // Tambahkan gambar OG Anda
        width: 1200,
        height: 630,
      }
    ],
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
