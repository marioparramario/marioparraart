export const images = [
  'photo-1520517601640-32ec514e4a15',
  'photo-1518780535463-bc357fa46e64',
  'photo-1555068178-89125fb6356d',
  'photo-1553503359-d4ff2537a6ea',
  'photo-1585211751845-37663b4ab614',
  'photo-1496467115032-c504ef76521b',
];

const BASE_URL = process.env.NODE_ENV === 'production'
  ? 'https://dreampay-guuz2y3uia-uc.a.run.app'
  : 'http://localhost:8882';

export const endpoints = {
  product: `${BASE_URL}/api/v1/products/list`
};
