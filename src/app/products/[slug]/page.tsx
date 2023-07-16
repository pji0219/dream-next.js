type Props = {
  params: {
    slug: string;
  };
};

export default function Pants({ params }: Props) {
  return <h1>{params.slug} 제품 설명 페이지!</h1>;
}
