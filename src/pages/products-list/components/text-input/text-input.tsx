import React, { InputHTMLAttributes, forwardRef } from 'react';
import './text-input.styles.css';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

const TextInputComponent = forwardRef((props: IProps, ref) => {
  return (
    <label className="TextInputLabel" htmlFor="Product name">
      Product name
      <input {...props} ref={ref as React.RefObject<HTMLInputElement>} type="text" />
    </label>
  );
});

TextInputComponent.displayName = 'TextInput';

export default TextInputComponent;
