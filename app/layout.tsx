import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LoadingProvider from "@/components/LoadingProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Arsy Rizkia | Full-Stack Developer",
  description: "Full-Stack Developer specializing in mobile and web applications. Building seamless digital experiences with modern technologies.",
  keywords: ["Full-Stack Developer", "Mobile Developer", "Web Developer", "React", "Node.js", "Kotlin", "Swift"],
  authors: [{ name: "Arsy Rizkia" }],
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Arsy Rizkia | Full-Stack Developer",
    description: "Full-Stack Developer specializing in mobile and web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-white text-gray-900`}>
        <LoadingProvider>
          {children}
        </LoadingProvider>
      </body>
    </html>
  );
}
