export enum ProductStatus {
  RanOut = 'ran out',
  Have = 'have'
}

export interface Product {
  id: number;
  productName: string;
  productPriority: string;
  changedTime: number;
  status: ProductStatus;
}
