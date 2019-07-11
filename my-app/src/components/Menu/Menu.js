import React from 'react';
import PropTypes from 'prop-types';
import MenuList from '../MenuList/MenuList';

const Menu = ({ products }) => {
  return (
    <ul>
      {products.length >= 3 ? (
        products.map(element => (
          <li key={element.id}>
            <MenuList {...element} />
          </li>
        ))
      ) : (
        <p>false</p>
      )}
    </ul>
  );
};

Menu.defaultProps = {
  products: [],
};

Menu.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired }),
  ),
};

export default Menu;
