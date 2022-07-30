import React from 'react';
import ReactDOM from 'react-dom';

const Checkout = ({ productId }) => (
  <div>
    <div>Checkout!</div>
    <div> Product: {productId} </div>
    <div>
      <button> Change Image </button>      
    </div>
    <div>
      <button> Add to Card </button>      
    </div>
  </div>
);

global.diy.registerComponent('checkout', {
  create(node, props) {
    ReactDOM.render(<Checkout {...props} />, node);
  }
})