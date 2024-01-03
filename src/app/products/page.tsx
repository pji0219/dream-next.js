import Link from 'next/link';

const products = ['shirt', 'pants', 'skirt', 'shoes'];

// 서버 파일(데이터베이스)에 있는 제품의 리스트를 읽어와서 그걸 보여줌
export default function ProductsPage() {
  return (
    <>
      <h1>제품 소개 페이지!</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <Link href={`/products/${product}`}>{product}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
