import React from 'react';
import Menu from './Menu/Menu';
import products from './products.json';
// import DropDown from './Drop-down/Drop-down';

const App = () => {
  return (
    <>
      <Menu products={products} />
    </>
  );
};

export default App;
