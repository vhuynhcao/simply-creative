import React from 'react';

class CartOrContinueModal extends React.Component {

  render() {
    const product = this.props.product;
    const view = this.props.setView;
    return (
      <div className="modal-box d-flex">
        <div className="inner-modal bg-light fade-in">
          <h5 className="m-3">New Item Added</h5>
          <p className="ml-3 mr-3">
            You have successfully <span className="modal-item-name">{product.name}</span> added to your
            cart!
          </p>
          <button
            type="button"
            className="btn btn-primary mb-3 mr-2"
            onClick={() => view('catalog', {})}
          >
            Continue Shopping
          </button>
          <button
            type="button"
            className="btn btn-success mb-3 mr-2"
            onClick={() => view('cart')}
          >
            Go to Cart
          </button>
        </div>
      </div>
    );
  }
}

export default CartOrContinueModal;
