import "./globals.css";
import type { Metadata } from "next";
import { Provider } from "@/components/provider";

import localFont from "next/font/local";

const spaceMono = localFont({
  src: [
    {
      path: "../public/fonts/space-mono/Gotham-Light.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/space-mono/Gotham-LightItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/space-mono/Gotham-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/space-mono/Gotham-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
  ],
});

export const metadata: Metadata = {
  title: "Throat",
  generator: "Next.js",
  applicationName: "Throat",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "Boilerplate",
    "Template",
    "shadcn-ui",
  ],
  authors: [{ name: "Husain", url: "https://throat-two.vercel.app/" }],
  creator: "Husain",
  publisher: "Throat",
  alternates: {},
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://throat-two.vercel.app/"),
  openGraph: {
    title: "Throat",
    description: "Next.js, TailwindCSS and shadcn-ui Starter Template",
    url: "https://throat-two.vercel.app/",
    siteName: "Throat Art",
    images: [
      {
        url: "https://throat-two.vercel.app/og.png",
        width: 800,
        height: 600,
      }
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${spaceMono.className}`}>
        <Provider attribute="class" defaultTheme="system" enableSystem>
          <main
            className={`text-zinc-700 bg-white dark:text-zinc-400 dark:bg-black`}
          >
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
