import Link from 'next/link';
import styles from './page.module.css';

export default function Products() {
  const products = ['shirt', 'pants', 'skirt', 'shoes'];

  return (
    <>
      <h1>제품 소개 페이지!</h1>
      <ul className={styles.ul}>
        {products.map((product, index) => (
          <Link href={`/products/${product}`} key={index}>
            {product}
          </Link>
        ))}
      </ul>
    </>
  );
}
