import React from 'react';
import './add-button.styles.css';

interface IProps {
  onClick: () => void;
}

const AddButtonComponent: React.FC<IProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="AddButton">
      +
    </button>
  );
};

export default AddButtonComponent;
