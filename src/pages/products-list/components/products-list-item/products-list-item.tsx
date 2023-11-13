import React, { useMemo } from 'react';
import TrashIconPng from '../../../../assets/icons/trashIcon.png';
import { Product, ProductStatus } from '../../products-list.types';
import { formatMillisecondsToTimeString } from '../../../../utils/time-formating.utils';
import './products-list-item.styles.css';

interface IProps extends Product {
  toggleProductStatuses: (id: number) => void;
  removeProduct: (id: number) => void;
}

const ProductsListItemComponent: React.FC<IProps> = ({
  productName,
  productPriority,
  changedTime,
  status,
  id,
  toggleProductStatuses,
  removeProduct
}) => {
  const date = useMemo(() => formatMillisecondsToTimeString(changedTime), [changedTime]);
  const isHave = status === ProductStatus.Have;

  const handleCheckboxClick = (event: any) => {
    event.preventDefault();

    toggleProductStatuses(id);
  };

  const handleDeleteClick = (event: any) => {
    event.preventDefault();

    removeProduct(id);
  };

  const productsListItemLeftContentClasses = `ProductsListItemLeftContent ${
    !isHave ? 'ProductsListItemContainerDisabled' : ''
  }`;
  const productsListItemRightContentInfoClasses = `ProductsListItemRightContentInfo ${
    !isHave ? 'ProductsListItemContainerDisabled' : ''
  }`;

  return (
    <div className="ProductsListItemContainer">
      <div className={productsListItemLeftContentClasses} onClick={handleCheckboxClick}>
        <div className="ProductCheckboxContainer">{!isHave && <div className="ProductCheckboxChecked"></div>}</div>
        <p className="ProductName">{productName}</p>
      </div>
      <div className="ProductsListItemRightContent">
        <div className={productsListItemRightContentInfoClasses}>
          <div className="PriorityContainer">
            <p className="ProductPriority">Priority:</p>
            <p className="ProductPriority">{productPriority}</p>
          </div>
          <p className="ChangedTime">{date}</p>
        </div>
        <img onClick={handleDeleteClick} src={TrashIconPng} alt="Delete icon" />
      </div>
    </div>
  );
};

export default ProductsListItemComponent;
