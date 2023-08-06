import ThemeRegistry from '@/components/MUI/ThemeRegistry';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar/Navbar';
import { ThemeProvider } from '@mui/material';
import { theme } from '@/components/MUI/Theme';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Home Page',
  description: 'GW_MC home page',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <body>
        <ThemeRegistry options={{ key: 'mui' }}>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
