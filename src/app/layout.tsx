import "./globals.css";
import { Providers } from "@/redux/Providers";
import HeaderTop from "@/components/HeaderTop";
import HeaderMain from "@/components/HeaderMain";


import { Inter, Poppins } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "ShowHunt",
  description: "Discover as you hunt, track what's hot, and shop smarter",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans bg-white text-darkText antialiased">
        <Providers>
          {/* Sticky Header */}
          <HeaderTop />
          <HeaderMain />

          {/* Main content area */}
          <main className="min-h-screen">{children}</main>

          {/* Global Footer */}
         
        </Providers>
      </body>
    </html>
  );
}
