import React, { useRef, useEffect } from 'react';
import TextInputComponent from '../text-input/text-input';
import { SelectInput } from '../select-input';
import { Product, ProductStatus } from '../../products-list.types';
import './text-input-form.styles.css';

interface IProps {
  onSubmit: (product: Product) => void;
}

const TextInputFormComponent: React.FC<IProps> = ({ onSubmit }) => {
  const inputTextRef = useRef<HTMLInputElement>();
  const inputSelectRef = useRef<HTMLSelectElement>();

  useEffect(() => {
    inputTextRef?.current?.focus();
  }, []);

  const handleSubmitClick = () => {
    const productName = inputTextRef?.current?.value;
    if (!productName) {
      return;
    }

    const productPriority = inputSelectRef?.current?.value || '1';
    const createdTime = Date.now();

    onSubmit({
      productName,
      productPriority,
      id: createdTime,
      changedTime: createdTime,
      status: ProductStatus.Have
    });
  };

  return (
    <div className="InputFormContainer">
      <TextInputComponent className="BaseInput" ref={inputTextRef} />
      <SelectInput ref={inputSelectRef} />
      <button className="SubmitAddProductButton" onClick={handleSubmitClick}>
        Add
      </button>
    </div>
  );
};

export default TextInputFormComponent;
