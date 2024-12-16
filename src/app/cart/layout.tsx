import styles from './layout.module.css';

type Props = {
  children: React.ReactNode;
};

export default function ProductsLayout({ children }: Props) {
  return (
    <>
      <nav className={styles.nav}>
        <a>홈으로</a>
        <a>상품 목록으로</a>
      </nav>
      <section>{children}</section>
    </>
  );
}
