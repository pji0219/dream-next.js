import { notFound } from 'next/navigation';

export default function HomePage() {
  notFound();
  return <h1>홈 페이지다!</h1>;
}
