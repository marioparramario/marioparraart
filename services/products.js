import { get } from 'axios';
import { endpoints } from '../constants';
import { Data } from "../data/Data";

export const getProducts = () => {
  return Data.map((product, index) => ({
        ...product,
        id: index,
      }))
  // return Promise.resolve(
  //   Data.map((product, index) => ({
  //     ...product,
  //     id: index,
  //   }))
  // );
  // // return get(endpoints.product)
  //   .then((response) => response.data)
  //   .then((data) => data.product);
};
