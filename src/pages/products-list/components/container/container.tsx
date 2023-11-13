import React, { PropsWithChildren } from 'react';
import './container.styles.css';

const ContainerComponent: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="ProductsContainer">{children}</div>;
};

export default ContainerComponent;
