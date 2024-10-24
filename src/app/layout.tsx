import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./appComponents/Navbar";
import Footer from "@/components/ui/Footer";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Socktopus",
  description: "Brought to you by @benhyh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <main className="flex flex-col min-h-[calc(100vh-3.5rem-1px)]">
          <div className="flex-1 flex flex-col h-full">{children}</div>
          <Footer />
        </main>

        <Toaster />
      </body>
    </html>
  );
}
