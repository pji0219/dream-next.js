import Link from 'next/link';
import { getProducts } from '@/service/products';
import MeowArticle from '@/components/MeowArticle';

// ISR을 하고 싶으면 page나 layout파일에 써주면 됨, 3초마다 ISR
// export const revalidate = 3;

// 서버 파일(데이터베이스)에 있는 제품의 리스트를 읽어와서 그걸 보여줌
// getProducts함수가 promise를 리턴하기 때문에 다 불러와진 후 값을 쓰기 위해 async await을 써줌
export default async function ProductsPage() {
  throw new Error();
  const products = await getProducts();

  // 네트워크 통신으로 데이터베이스에 있는 데이터를 가져오기 위해서 서버 컴포넌트에서도 fetch사용 가능
  // 두번째 인자에 저렇게 적어주면 3초마다 fetch해주게 된다 즉 3초마다 ISR로 렌더링된다. 0으로 할 경우에는 SSR이 된다.
  // const res = await fetch('https://meowfacts.herokuapp.com', {
  //   next: { revalidate: 3 },
  // });
  // const data = await res.json();
  // const factText = data.data[0];

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
      {/* 클라이언트 컴포넌트를 만들어서 부분적으로 CSR을 할 수 있다. 이것을 하이브리드 개념이라고 한다. */}
      <MeowArticle />
    </>
  );
}
