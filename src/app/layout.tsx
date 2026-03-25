import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, DM_Sans } from "next/font/google";
import "./globals.css";
import { BUSINESS_FULL_NAME, BUSINESS_TAGLINE } from "@/lib/constants";

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-barlow",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: BUSINESS_FULL_NAME,
    template: `%s | ${BUSINESS_FULL_NAME}`,
  },
  description: `${BUSINESS_TAGLINE} — Professional auto electrical diagnostics, repairs, and ECU services.`,
  openGraph: {
    title: BUSINESS_FULL_NAME,
    description: BUSINESS_TAGLINE,
    type: "website",
    locale: "en_GH",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A192F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${barlow.variable} ${dmSans.variable}`}
    >
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  );
}