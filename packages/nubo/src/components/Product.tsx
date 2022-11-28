import { FC } from 'react';
import { Product } from '../types';

interface Props {
  product: Product;
}

const Product: FC<Props> = ({ product }) => {
  return (
    <div>
      <h1>
        {product.brand} {product.title}
      </h1>

      <img width={200} src={product.images[0]} alt={product.title} />

      <br />
      <br />

      <p>{product.description}</p>

      <h2>${product.price}</h2>

      <pre style={{ display: 'none' }}>{JSON.stringify(product, null, 2)}</pre>
    </div>
  );
};

export default Product;
