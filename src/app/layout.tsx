import Link from 'next/link';

import './globals.css';
import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
import { Open_Sans } from 'next/font/google';
import { Nanum_Gothic } from 'next/font/google';
import styles from './layout.module.css';

// const inter = Inter({ subsets: ['latin'] });
const sans = Open_Sans({ subsets: ['latin'] });
const gothic = Nanum_Gothic({
  weight: '700',
  subsets: ['latin'],
});

/**
  metadata를 레이아웃 파일에 하면 전체 페이지에 적용이 되고 page파일에 하면 그 페이지에만 적용 된다.
  (특정 라우팅 폴더 내에서는 레이아웃에서 할 시 그 라우트 내에 모든 페이지에 적용, 페이지 파일의 경우에는
    제일 하위 경로에 한 것이 덮어씀
    )
  이 레이아웃 파일은 루트 app경로에 있기 때문에 전체 페이지에 적용 됨
 */
export const metadata: Metadata = {
  title: '멋진 제품 사이트',
  description: '멋진 제품을 판매하는 곳 입니다.',
  // 파비콘 명시 안해도 자동으로 됨
  // icons: {
  //   icon: '/favicon.ico',
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={sans.className}>
      <body>
        <header className={styles.header}>
          <Link href='/'>
            <h1 className={gothic.className}>Demo Note</h1>
          </Link>
          <nav className={styles.nav}>
            <Link href='/products1'>products</Link>
            <Link href='/contact2'>Contract</Link>
            <Link href='/pji'>About</Link>
          </nav>
        </header>
        {children}
        <footer className={styles.footer}>v0.1.0</footer>
      </body>
    </html>
  );
}
