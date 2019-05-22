import React from 'react';
import PropTypes from 'prop-types';

import classes from './Button.module.css';

const button = props => (
  <button
    disabled={props.disabled}
    className={[classes.Button, classes[props.btnType]].join(' ')}
    onClick={props.clicked}
  >
    {props.children}
  </button>
);

button.propTypes = {
  btnType: PropTypes.string,
  clicked: PropTypes.func,
  children: PropTypes.string.isRequired,
};

export default button;
