import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./component/navbar/Navbar";
import CustomCursor from "./component/Cursor";
import Footer from "./component/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// const CustomCursor = dynamic(() => {
//   ssr: false,
// });

export const metadata: Metadata = {
  title: "Net Masters",
  description: "Tennis platform",
  icons: {
    icon: "net-masters.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        <CustomCursor />
        {children}
        <Footer />
      </body>
    </html>
  );
}
