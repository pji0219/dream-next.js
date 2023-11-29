import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import styles from './layout.module.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <header className={styles.header}>
          <h1>Demo Note</h1>
          <nav className={styles.nav}>
            <a href='/contact'>Contract</a>
            <a href='/about'>About</a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
