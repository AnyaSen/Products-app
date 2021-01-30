import { productType } from "../types";

export const findProductById = (arr: Array<productType>, id: string) => {
  const currentProduct = arr.find(product => product._id === id);

  return currentProduct;
};
