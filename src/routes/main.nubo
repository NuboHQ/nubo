import { FC } from 'react';
import { Product } from '../types';

const { productId } = Nubo.req.paramData;
const result = await fetch(`https://dummyjson.com/products/${productId}`);
const product: Product = await result.json();

export const props = { productId, product };
---

const Page: FC = () => {
  return (
    <div>
      {product.title}
    </div>
  );
};

export default Page;
