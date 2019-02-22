import React, { Component, Fragment } from 'react';
import Product from './Product';

export default class Products extends Component {

  state = {
    newproduct: '',
    products: []
  }

  handleAddProduct = event => {
    event.preventDefault();
    this.setState({ products: [...this.state.products, this.state.newproduct] })
    this.setState({ newproduct: '' });
  }

  fetchProducts = () => {
    // add call to AWS API Gateway to fetch products here
    // then set them in state
  }

  onAddProductChange = event => this.setState({ newproduct: event.target.value });

  componentDidMount = () => {
    this.fetchProducts();
  }

  render() {
    return (
      <Fragment>
        <section className="section">
          <div className="container">
            <h1>Energy Products</h1>
            <p className="subtitle is-5">Invest in a clean future with our efficient and cost-effective green energy products:</p>
            <br />
            <div className="columns">
              <div className="column">
                <div className="tile is-ancestor">
                  <div className="tile is-4 is-parent  is-vertical">
                    { 
                      this.state.products.length > 0
                      ? this.state.products.map(product => <Product name={product} />)
                      : <div className="tile notification is-warning">No products available</div>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}
