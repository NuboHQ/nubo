import type { Product } from '@prisma/client';
import { PrismaClient } from '@prisma/client';
import { FC } from 'react';

export const Page: FC = ({ props: { product, value } }: any) => {
<div>{product.title} {value}</div>
}