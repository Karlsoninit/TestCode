import React from 'react';
import styled from 'styled-components';
import Menu from './Menu/Menu';
import products from './products.json';

const Container = styled.div`
  width: 500px;
`;

const App = () => {
  return (
    <Container>
      <Menu
        products={products}
        icon="https://static.mattonito.com/img/products/9040/e1486f3b-565d-467a-9516-7e0695e5c81b.jpg"
      />
    </Container>
  );
};

export default App;
