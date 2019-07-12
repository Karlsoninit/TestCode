import React from 'react';
import PropTypes from 'prop-types';
import MenuList from '../MenuList/MenuList';
import style from './Menu.module.css';

const Menu = ({ products }) => {
  return (
    <ul className={style.box}>
      {products.length >= 3 ? (
        products.map(element => (
          <li className={style.innerBox} key={element.id}>
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
