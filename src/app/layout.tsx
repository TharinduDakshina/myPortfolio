'use client'
import { Noto_Sans } from 'next/font/google'
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'
import Layout from "@/app/components/layout/appLayout";

const notoSans = Noto_Sans({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans',
})



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSans.variable}`}>
      <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
              <Layout>{children}</Layout>
          </ThemeProvider>
      </AppRouterCacheProvider>
      </body>
    </html>
  );
}
