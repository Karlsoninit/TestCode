import React from 'react';
import Menu from './Menu/Menu';
import products from './products.json';

const App = () => {
  return (
    <>
      <Menu products={products} />
    </>
  );
};

export default App;
