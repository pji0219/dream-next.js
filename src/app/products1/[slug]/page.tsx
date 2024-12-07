import { notFound } from 'next/navigation';

// ISR을 하고 싶으면 page나 layout파일에 써주면 됨, 3초마다 ISR
export const revalidate = 3;

type Props = {
  params: {
    slug: string;
  };
};

// 동적 메타데이터
export function generateMetadata({ params: { slug } }: Props) {
  return {
    title: `제품 이름: ${slug}`,
  };
}

// 제품 설명 페이지의 기본 골격은 프리 렌더링 됨 params로 받아온 키워드에 대한 페이지는 요청 시에 SSR
export default function PantPage({ params: { slug } }: Props) {
  // 경로 별로 not-found 파일을 만들면 경로 별로 다른 UI를 보여줄 수 있다.
  if (slug === 'not') {
    notFound();
  }

  return <h1>{slug}제품 설명 페이지</h1>;
}

// 빌드 시에 해당 키워드에 한해서는 미리 페이지를 만들어 놓음
// 이렇게 하지 않은 키워드는 요청이 될 때 페이지를 만들고 SSR로 렌더링 됨
export function generateStaticParams() {
  const products = ['pants', 'skirt'];
  return products.map((product) => ({
    slug: product,
  }));
}
