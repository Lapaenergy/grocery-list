import React, { forwardRef } from 'react';
import './select-input.styles.css';

const PROIRS = [1, 2, 3, 4, 5];

const SelectInputComponent = forwardRef((props, ref) => {
  return (
    <label className="SelectInputLabel">
      Priority
      <select className="SelectInput" ref={ref as React.RefObject<HTMLSelectElement>} name="Prior">
        {PROIRS.map((Priority) => (
          <option className="SelectOption" key={Priority} value={Priority}>
            {Priority}
          </option>
        ))}
      </select>
    </label>
  );
});

SelectInputComponent.displayName = 'SelectInput';

export default SelectInputComponent;
