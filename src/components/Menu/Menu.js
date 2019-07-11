import React from 'react';
import PropTypes from 'prop-types';
import MenuList from '../MenuList/MenuList';
import StyleWrapper from './Menu.styled';

const Menu = ({ products, icon }) => {
  return (
    <StyleWrapper icon={icon}>
      {products.length >= 3 ? (
        products.map(element => (
          <li key={element.id}>
            <MenuList {...element} />
          </li>
        ))
      ) : (
        <p>false</p>
      )}
    </StyleWrapper>
  );
};

Menu.defaultProps = {
  products: [],
  icon: '',
};

Menu.propTypes = {
  icon: PropTypes.string,
  products: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired }),
  ),
};

export default Menu;
