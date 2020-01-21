import React from 'react';
import CartSummaryItems from './cart-summary-items';

function CartSummary(props) {
  const cartItems = props.viewCart;

  let totalPrice = 0;
  cartItems.map(product => (totalPrice = totalPrice + product.price));

  let display = null;
  if (cartItems.length === 0) {
    display = (
      <h4 className="text-danger">No items in cart</h4>
    );
  } else {
    display = (
      <>
        {cartItems.map(item => {
          return (
            <CartSummaryItems
              key={item.productId}
              cartInfo={item}
              deleteItem={props.deleteItem}
              setView={props.setView}
              updateCart={props.updateCart}
              cartLength={props.viewCart}
            />
          );
        })}
        <div className="container d-flex justify-content-between mb-5">
          <h4>
            Total:{' '}
            <span className="text-danger">
              {'$' + (totalPrice / 100).toFixed(2)}
            </span>
          </h4>
          <button
            type="button"
            className="linkPointer btn btn-primary"
            onClick={() => props.setView('checkout')}
          >
            Checkout
          </button>
        </div>
      </>
    );
  }
  return (
    <>
      <div
        className="linkPointer text-muted"
        onClick={() => props.setView('catalog')}
      >
        <i className="fas fa-angle-double-left mr-2"/>Back to Catalog
      </div>
      <h1>My Cart</h1>
      {display}
    </>
  );
}

export default CartSummary;
