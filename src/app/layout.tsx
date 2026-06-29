import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Inter, Nunito } from "next/font/google";
import { cn } from "@/utils/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
// Rounded display face — the web stand-in for the app's SF Pro Rounded, used on
// titles and big numbers so the site reads warm/friendly like the iOS UI.
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-nunito",
});

const SITE_URL = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : undefined;

// The platform stamps the real product title/description into .env at scaffold
// time (NEXT_PUBLIC_APP_TITLE / NEXT_PUBLIC_APP_DESCRIPTION). These drive the
// app's <title> / meta description. Fall back to a generic default when unset
// (e.g. local dev before any scaffold values are written).
const SITE_TITLE = process.env.NEXT_PUBLIC_APP_TITLE?.trim() || "ZeroSqueeze";
const SITE_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION?.trim() ||
  "Cuffless heart-health on your iPhone. ZeroSqueeze uses the accelerometer and camera to estimate blood pressure, heart rate, and HRV in under 60 seconds — no cuff, no wearable, all on-device.";

export const metadata: Metadata = {
  ...(SITE_URL ? { metadataBase: new URL(SITE_URL) } : {}),
  title: {
    default: `${SITE_TITLE} — Your heart, in numbers`,
    template: `%s · ${SITE_TITLE}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_TITLE,
  keywords: [
    "blood pressure",
    "cuffless",
    "heart rate",
    "HRV",
    "seismocardiography",
    "SCG",
    "PPG",
    "iPhone health",
    "on-device",
  ],
  // Favicon + apple-touch-icon come from src/app/icon.png and
  // src/app/apple-icon.png automatically (Next.js file conventions).
  openGraph: {
    type: "website",
    siteName: SITE_TITLE,
    title: `${SITE_TITLE} — Your heart, in numbers`,
    description: SITE_DESCRIPTION,
    url: "/",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = "en";

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={cn("h-full antialiased", inter.variable, nunito.variable)}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
