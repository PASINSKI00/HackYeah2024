import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';
import PageHeader from '@/components/page-header';
import Logo from '@/components/logo';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CO2UNTER',
  description: 'CO2UNTER is a carbon footprint calculator.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${inter.className} overflow-x-hidden antialiased`}>
        <Logo />

        <PageHeader />

        {children}

        <Navbar />
      </body>
    </html>
  );
}
