import { NuboResponse } from 'nubo';


export let props;

export const getServerProps = async () => {
const product = {};

props = { product }

// return NuboResponse.json({ message: 'Hello from Nubo Edge!' })

return props;
}