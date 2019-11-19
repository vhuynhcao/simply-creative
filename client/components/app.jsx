import React from 'react';
import Header from './header';
import ProductList from './product-list';

export default class App extends React.Component {
  render() {
    return (
      <div className="salesCont">
        <Header text="Wicked Sales" />
        <div className="container">
          <ProductList/>
        </div>
      </div>
    );

  }
}
