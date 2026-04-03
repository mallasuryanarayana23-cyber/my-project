import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import VoiceButton from "@/components/ui/VoiceButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SkillMap | Verified MSME Workforce",
  description: "India's leading platform connecting MSMEs with verified local skilled workers through video verification and GPS search.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground selection:bg-primary/20 selection:text-primary">
        {children}
        <VoiceButton />
      </body>
    </html>
  );
}

