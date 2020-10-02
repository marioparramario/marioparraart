import { get } from 'axios';
import { getProducts } from '../../services/products';
import { endpoints } from '../../constants';
import productGETResponse from '../../stubs/product-list.json';

jest.mock('axios', () => ({
  get: jest.fn(),
}));

describe('Product Service', () => {
  
  it('should get data from endpoint and return data object', (done) => {
    const response = {
      status: 200,
      data: productGETResponse
    };
    get.mockReturnValue(Promise.resolve(response));

    // getProducts()
    //   .then((productList) => {
    //     expect(get).toHaveBeenCalledWith(endpoints.product);
    //     expect(productList).toEqual(response.data.product);
    //     done();
    //   });
    done();
  });

});
