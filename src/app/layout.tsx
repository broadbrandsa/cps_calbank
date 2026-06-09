import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Academy of Trusted Advisors | Proposal for CalBank",
  description:
    "A proposal from Cornerstone Performance Solutions for CalBank: a leader-led relationship management programme that activates relationship managers as trusted advisors, growing client value and portfolio contribution.",
  metadataBase: new URL("https://calbank-academy-of-trusted-advisors.vercel.app"),
  openGraph: {
    title: "Academy of Trusted Advisors | Proposal for CalBank",
    description:
      "Activating relationship managers as trusted advisors. A leader-led relationship management programme from Cornerstone Performance Solutions.",
    type: "website",
  },
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-ZA"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
