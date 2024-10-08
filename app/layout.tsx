import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { Cormorant } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import { Toaster } from "@/components/ui/toaster";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-caption",
});

const cormorant = Cormorant({
  subsets: ["latin"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Portfolio - Dorian Pernot",
  description: "Developer frontend React / Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          GeistSans.variable,
          josefinSans.variable,
          cormorant.variable,
          "font-sans bg-background text-foreground scrollbar-gutter-stable"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex flex-col mx-auto min-h-screen h-full max-w-7xl">
            <Header />
            <Nav />
            <div className="sm:px-10 px-5">
              <main className="flex-grow container mx-auto px-4 py-8">
                {children}
              </main>
              <Toaster />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
