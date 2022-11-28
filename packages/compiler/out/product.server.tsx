import type { Product } from '@prisma/client';
import { PrismaClient } from '@prisma/client';

export const config = { path: '/products/:productId' };

const prisma = new PrismaClient();
const product: Product = await prisma.product.findOne({ where: { id: 1 } });
const value = 'custom value';

export const props = {
  product,
  value,
};