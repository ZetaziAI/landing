import type { Metadata } from "next";
import "./globals.css";
import "./modern.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://zetazi-edge-ai.amir-amanzadi.chatgpt.site"),
  title: "Zetazi | We bring intelligence to the edge",
  description: "Private, real-time edge AI for devices, client-controlled infrastructure, and disconnected environments.",
  icons: { icon: "/favicon.svg?v=2" },
  openGraph: {
    title: "Zetazi | We bring intelligence to the edge",
    description: "Private, real-time edge AI that operates inside the infrastructure you control.",
    images: [{ url: "/og.png", width: 1792, height: 922, alt: "Zetazi edge intelligence" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zetazi | We bring intelligence to the edge",
    description: "Private, real-time edge AI that operates inside the infrastructure you control.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
