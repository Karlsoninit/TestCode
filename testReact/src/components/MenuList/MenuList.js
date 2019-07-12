import React from 'react';
import PropTypes from 'prop-types';
import style from './MenuList.module.css';

const MenuList = ({ price, icon, title, disabled }) => {
  return (
    <div>
      <h1 className={disabled ? style.titleStyle : style.titleDiasable}>
        {title}
      </h1>
      <img className={style.imgStyle} src={icon} alt={title} />
      <p>{price}</p>
    </div>
  );
};

MenuList.defaultProps = {
  price: 0,
  icon: '',
  title: '',
  disabled: false,
};

MenuList.propTypes = {
  disabled: PropTypes.bool,
  price: PropTypes.number,
  icon: PropTypes.string,
  title: PropTypes.string,
};

export default MenuList;
