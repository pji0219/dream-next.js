// 'use client';
// import { useSearchParams } from 'next/navigation';
import styles from './layout.module.css';

type Props = {
  children: React.ReactNode;
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
