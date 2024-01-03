// 동적 라우팅 사용 이유 만약 특정 경로의 하위 경로가 100개 있을 경우 100개의 폴더를 만들어야하는 것은 비효율적이기 때문에
// 동적 라우팅을 하기 위해서 폴더명을 []를 해주면 되는데 []안에 들어갈 이름은 자유지만 보통 slug로 해준다.
import { notFound } from 'next/navigation';

type Props = {
  params: {
    slug: string;
  };
};

// 동적 메타데이터
export function generateMetadata({ params }: Props) {
  return {
    title: `제품 이름: ${params.slug}`,
  };
}

// 서버 파일에 있는 데이터중 해당 제품의 정보를 찾아서 그걸 보여줌
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
  (10개의 하위 경로만 필요해서 10개만 미리 만들어 놓는 식으로도 사용할 수 있다.)
*/
export function generateStaticParams() {
  // 모든 제품의 페이지들을 미리 만들어 둘 수 있게 해줄거임(SSG)
  const products = ['pants', 'skirt', 'shirt', 'shoes'];

  return products.map((product) => ({
    slug: product,
  }));
}
