import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import {ClerkProvider} from '@clerk/nextjs'
import { ThemeProvider } from "@/providers/theme-provider";

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Slide',
  description: 'Automate DMs and comments on instagram',
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <ClerkProvider>
      <html lang="en">
      <body suppressHydrationWarning className={jakarta.className}>
        <ThemeProvider  attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange>
        {children}

        </ThemeProvider>
        
        
        </body>
    </html>
  </ClerkProvider>
  );
}
