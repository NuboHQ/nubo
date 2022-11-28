import { NuboResponse } from '../response';

const { productId } = Nubo.req.paramData;
const result = await fetch(`https://dummyjson.com/products/${productId}`);
const product = await result.json();

return NuboResponse.json(product);

// ---
