import { Product } from './products-list.types';

export const sortProducts = (products: Product[]) => {
  const sortedProducts = products.sort((a, b) => {
    if (a.productPriority !== b.productPriority) {
      return Number(a.productPriority) - Number(b.productPriority);
    }

    return a.productName.localeCompare(b.productName);
  });

  return sortedProducts;
};
