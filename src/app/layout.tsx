import { ThemeProvider } from "@/providers/theme-provider"
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import ModalProvider from "@/providers/modal-provider";
import { Toaster } from "sonner";
import NextTopLoader from 'nextjs-toploader';


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
    
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <html lang="en">
        <head>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@uploadcare/blocks@0.50.4/web/lr-file-uploader-regular.min.css" />
        </head>
        <body
          className={`${font.className} font-sans`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <ModalProvider>
              <NextTopLoader
               color="#9F54FF"
               initialPosition={0.08}
               crawlSpeed={200}
               height={2}
               crawl={true}
               showSpinner={false}
               easing="ease"
               speed={200}
               shadow="0 0 10px #9F54FF,0 0 5px #9F54FF"
               template='<div class="bar" role="bar"><div class="peg"></div></div> 
               <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
               zIndex={1600}
               showAtBottom={false}
              ></NextTopLoader>
                {children}
              <Toaster />
            </ModalProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
