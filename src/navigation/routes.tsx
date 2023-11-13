import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProductsList } from '../pages/products-list';
import { ProductDetails } from '../pages/product-details';
import { NotFound } from '../pages/not-found';

export const RootNavigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductsList />} />
        <Route path="/product-details/:productId" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
