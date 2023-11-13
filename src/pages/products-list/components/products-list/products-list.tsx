import React from 'react';
import { Product } from '../../products-list.types';
import { ProductsListItem } from '../products-list-item';

interface IProps {
  products: Product[];
  toggleProductStatuses: (id: number) => void;
  removeProduct: (id: number) => void;
}

const ProductsListComponent: React.FC<IProps> = ({ products, toggleProductStatuses, removeProduct }) => {
  return (
    <div className="ProductsListContainer">
      {products.map((product) => (
        <ProductsListItem
          key={product.id}
          {...product}
          toggleProductStatuses={toggleProductStatuses}
          removeProduct={removeProduct}
        />
      ))}
    </div>
  );
};

export default ProductsListComponent;
