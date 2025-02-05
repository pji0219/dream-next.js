// 'use client';
// import { useSearchParams } from 'next/navigation';
import { Metadata } from 'next';
import styles from './layout.module.css';

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: '멋진 제품 사이트 | 전체 제품 확인',
  description: '멋진 제품을 판매하는 곳입니다.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function ProductsLayout({ children }: Props) {
  // const isLayout = [`/products1`].includes(pathname);

  // if (pathname) {
  //   return (
  //     <>
  //       <nav className={styles.nav}>
  //         <a>남성옷</a>
  //         <a>여성옷</a>
  //       </nav>
  //       <section>{children}</section>
  //     </>
  //   );
  // }

  return (
    <>
      <nav className={styles.nav}>
        <a>남성옷</a>
        <a>여성옷</a>
      </nav>
      <section>{children}</section>
    </>
  );
}
