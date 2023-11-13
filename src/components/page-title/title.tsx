import React from 'react';
import './page-title.styles.css';

interface IProps {
  titleText: string;
}

const PageTitleComponent: React.FC<IProps> = ({ titleText }) => {
  return <h1 className="PageTitle">{titleText}</h1>;
};

export default PageTitleComponent;
