import React, { useEffect, useState } from 'react';
import { PageTitle } from '../../components';
import { AddButton, Container, ProductsList, TextInputForm } from './components';
import { sortProducts } from './product-list.utils';
import { useLocalStorage } from '../../utils/local-storage.utils';
import { Product, ProductStatus } from './products-list.types';

const STORAGE_KEY = 'GROCERY-LIST';

const ProductsListPage = () => {
  const [showAddProductInput, setShowAddProductInput] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  const { get, set } = useLocalStorage<Product[]>(STORAGE_KEY);

  useEffect(() => {
    const storedLocalProducts = get() || [];
    setProducts(storedLocalProducts);
  }, []);

  const toggleInputForm = () => setShowAddProductInput((prev) => !prev);

  const handleSubmitAddProductClick = (product: Product) => {
    toggleInputForm();
    setProducts((prevProducts) => {
      const sortedProducts = sortProducts([product, ...prevProducts]);
      set(sortedProducts);
      return sortedProducts;
    });
  };

  const toggleProductStatuses = (id: number) => {
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          status: product.status === ProductStatus.Have ? ProductStatus.RanOut : ProductStatus.Have
        };
      }
      return product;
    });

    set(updatedProducts);
    setProducts(updatedProducts);
  };

  const removeProduct = (id: number) => {
    const updatedProducts = products.filter((product) => product.id !== id);

    set(updatedProducts);
    setProducts(updatedProducts);
  };

  return (
    <Container>
      <PageTitle titleText="Products List" />
      {showAddProductInput && <TextInputForm onSubmit={handleSubmitAddProductClick} />}
      <ProductsList products={products} toggleProductStatuses={toggleProductStatuses} removeProduct={removeProduct} />
      <AddButton onClick={toggleInputForm} />
    </Container>
  );
};

export default ProductsListPage;
