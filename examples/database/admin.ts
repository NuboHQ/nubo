import 'https://deno.land/x/dotenv@v3.2.0/load.ts';
import { City, prisma } from './prisma.ts';
// @deno-types="npm:@types/lodash"
import lodash from 'npm:lodash';
import { sequence } from './sequence.ts';

const max = 10000;
const chunkSize = 300;
const delay = 500;

const addCities = async (cities: City[], info: any) => {
  try {
    await prisma.city.createMany({ data: cities });
    console.log(info.index + 1, '/', info.total);
  } catch (error: any) {
    console.error(info.index + 1, error.message);
  }
};

(async () => {
  const citiesString = await Deno.readTextFile('cities.json');
  const cities = JSON.parse(citiesString).slice(0, max) as City[];
  const cityChunks = lodash.chunk(cities, chunkSize);

  console.log('Start:', cities.length);
  await prisma.city.deleteMany();

  console.log('Deleted current cities');

  await sequence({
    method: addCities,
    list: cityChunks,
    nextDelay: delay,
  });
})();
