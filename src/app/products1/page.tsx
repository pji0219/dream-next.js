import Link from 'next/link';
import React from 'react';

const products = ['pants', 'skirt', 'shirt', 'shoes'];

export default function ProductsPage() {
  return (
    <>
      <h1>제품 페이지</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <Link href={`/products1/${product}`}>{product}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
