import type { Metadata } from "next";
import { delius } from "@/app/ui/fonts";
import "@/app/ui/globals.css";
import Navbar from "@/app/ui/navbar";

export const metadata: Metadata = {
  title: "Raso Makko - Raso Asli, Nikmati Makko",
  description: "Dessert kekinian di Jakarta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${delius.className}  antialiased`}>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
