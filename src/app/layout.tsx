import type { Metadata } from "next";
import { Barlow, DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/components/theme-provider"; 
import Navbar from "@/app/components/shared/Navbar";
import Footer from "@/app/components/shared/Footer";

const barlow = Barlow({ 
  subsets: ["latin"], 
  weight: ["700", "800"], 
  variable: "--font-barlow" 
});

const dmSans = DM_Sans({ 
  subsets: ["latin"], 
  weight: ["400", "500"], 
  variable: "--font-dm-sans" 
});

export const metadata: Metadata = {
  title: "AUTOELECTRO | Advanced Engineering",
  description: "Specialized Vehicle Electrical Diagnostics & Repair",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${barlow.variable} ${dmSans.variable}`}>
      <body className="font-body antialiased bg-white dark:bg-[#050a14] transition-colors duration-300">
        <ThemeProvider 
          attribute="class" 
          defaultTheme="dark" 
          enableSystem={false}
        >
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}