// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return (
      <div className="product-card">
        <h1>{this.props.name}</h1>
        <p>Produced by {this.props.producer}</p>
        <p>Watermarked: {this.props.hasWatermark}</p>
        <p>Color: {this.props.color}</p>
        <p>Weight: {this.props.weight}</p>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

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

export default Product;
