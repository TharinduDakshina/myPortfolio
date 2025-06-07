"use client"
import { Inter } from 'next/font/google';
import { MaterialThemeProvider } from "@/components/theme-provider"
const inter = Inter({ subsets: ['latin'] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <MaterialThemeProvider>{children}</MaterialThemeProvider>
      </body>
    </html>
  );
}
