import { notFound } from 'next/navigation';

type Props = {
  params: {
    slug: string;
  };
};

export default function Pants({ params }: Props) {
  // 경로 별로 not-found 파일을 만들면 경로 별로 다른 UI를 보여줄 수 있다.
  if (params.slug === 'not') {
    notFound();
  }
  return <h1>{params.slug} 제품 설명 페이지!</h1>;
}

/* 
  원래 동적 라우팅에 사용되는 페이지 골격은 정적으로 프리 렌더링 해서 만들어져 있고 slug를 통해서 들어온 키워드를 리액트 props로
  받아와서 동적 라우팅이 되는데 
  generateStaticParams를 사용 해서 원하는 키워드에 한해서는 미리 정적으로 프리 렌더링 해둘 수 있다.
*/
export function generateStaticParams() {
  const products = ['pants', 'skirt'];

  return products.map((product) => ({
    slug: product,
  }));
}
