import path from 'path';
import { promises as fs } from 'fs';

export type Product = {
  id: string;
  name: string;
  price: number;
};

export async function getProducts(): Promise<Product[]> {
  // path.join()으로 현재 경로(process.cwd())와 data 디렉토리의 json파일을 합침
  const filePath = path.join(process.cwd(), 'data', 'products.json');
  const data = await fs.readFile(filePath, 'utf-8');

  // 데이터를 json 오브젝트로 리턴
  return JSON.parse(data);
}

export async function getProduct(id: string): Promise<Product | undefined> {
  const products = await getProducts();

  return products.find((product) => product.id === id);
}
