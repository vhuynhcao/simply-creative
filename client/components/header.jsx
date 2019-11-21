import React from 'react';

function Header(props) {
  return (
    <nav className="navbar navbar-dark bg-info sticky-top">
      <div className="nav-brand">
        <i className="fas fa-dollar-sign mr-1"/>
        {props.text}
        <div>
          {props.cartItemCount}
          <i className="fas fa-shopping-cart"/>
        </div>
      </div>
    </nav>
  );
}

export default Header;
