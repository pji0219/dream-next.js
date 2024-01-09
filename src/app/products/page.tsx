import { getProducts } from '@/service/products';
import Link from 'next/link';

// ISR을 하고 싶으면 page나 layout파일에 써주면 됨, 3초마다 ISR
export const revalidate = 3;

// 서버 파일(데이터베이스)에 있는 제품의 리스트를 읽어와서 그걸 보여줌
// getProducts함수가 promise를 리턴하기 때문에 다 불러와진 후 값을 쓰기 위해 async await을 써줌
export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <>
      <h1>제품 소개 페이지!</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
