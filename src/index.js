import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Product from './components/Product';

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: weightRange
  }

function weightRange(props, propName, componentName) {
  if (!props[propName] || typeof(props[propName] !== "number")) {
    return new Error(`${props[propName]} is required and must be a number.`)
  }
  else {
    let value = props[propName];
    if (value < 80 || value > 300) {
      return new Error(`${props[propName]} must be between 80 and 300.`)
    }
  }
}

ReactDOM.render(
  <Product
    name="Dunder Mifflin"
    producer="PaperCo"
    color="white"
    weight={210}
  />,
  document.getElementById('global')
);
