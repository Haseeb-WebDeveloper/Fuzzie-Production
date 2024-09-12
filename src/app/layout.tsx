import { ThemeProvider } from "@/providers/theme-provider"
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const font = DM_Sans({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Fuzzie",
  description: "Fuzzie is a platform that allows you to automate your business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
      <html lang="en">
        <body
          className={`${font.className} font-sans`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
  );
}
