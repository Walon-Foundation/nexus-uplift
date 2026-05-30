import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServiceWorkerRegistrar } from "@/components/ServiceWorkerRegistrar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ScrollToTop } from "@/components/ScrollToTop";

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
    default: "Nexus Uplift Foundation",
    template: "%s | Nexus Uplift",
  },
  description:
    "Empowering kids through science-based health education. We remove superstition around asthma, mental health, ulcers and more — one child at a time.",
  keywords: ["health education", "kids", "asthma", "mental health", "ulcer", "Africa", "science", "foundation"],
  authors: [{ name: "Nexus Uplift Foundation" }],
  creator: "Nexus Uplift Foundation",
  openGraph: {
    title: "Nexus Uplift Foundation",
    description: "Science-based health education for kids. Removing myths, one child at a time.",
    type: "website",
    locale: "en_GB",
    siteName: "Nexus Uplift",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexus Uplift Foundation",
    description: "Science-based health education for kids. Removing myths, one child at a time.",
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Nexus Uplift",
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1117" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <body className="min-h-dvh flex flex-col antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          <ServiceWorkerRegistrar />
          <ScrollProgress />
          <ScrollToTop />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
