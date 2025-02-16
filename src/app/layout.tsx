import type { Metadata } from "next";
import { Outfit,Plus_Jakarta_Sans,Righteous } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-outfit",
});
const righteous = Righteous({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-righteous",
});

const plus_jakarta = Plus_Jakarta_Sans({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-jakarta",
});


export const metadata: Metadata = {
  title: "Pradeep Varma",
  description: "Official Portfolio of Pradeep Varma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-gray-950 text-white ${outfit.variable} ${plus_jakarta.variable} ${righteous.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
