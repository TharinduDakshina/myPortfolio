import { Inter } from 'next/font/google';
import { MaterialThemeProvider } from "@/components/theme-provider"
import {Metadata} from "next";
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'My Portfolio',
    description: 'Welcome to my portfolio website',
    icons: {
        icon: './images/Profile_Pitcher.png',
    },
}


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
