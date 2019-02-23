import React, { Component, Fragment } from 'react';
import Product from './Product';

export default class ProductAdmin extends Component {

  state = {
    newproduct: '',
    products: []
  }

  handleAddProduct = event => {
    event.preventDefault();
    // add call to AWS API Gateway add product endpoint here
    this.setState({ products: [...this.state.products, this.state.newproduct] })
    this.setState({ newproduct: '' });
  }

  handleDeleteProduct = (name, event) => {
    event.preventDefault();
    // add call to AWS API Gateway delete product endpoint here
    var updatedProducts = [...this.state.products];
    var index = updatedProducts.indexOf(name)
    if (index !== -1) {
      updatedProducts.splice(index, 1);
      this.setState({products: updatedProducts});
    }
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
            <h1>Product Admin</h1>
            <p className="subtitle is-5">Add and remove products using the form below:</p>
            <br />
            <div className="columns">
              <div className="column is-one-half">
                <form onSubmit={this.handleAddProduct}>
                  <div className="field has-addons">
                    <div className="control">
                      <input 
                        className="input is-large"
                        type="text" 
                        placeholder="Enter product"
                        value={this.state.newproduct}
                        onChange={this.onAddProductChange}
                      />
                    </div>
                    <div className="control">
                      <button type="submit" className="button is-primary is-large">
                        Add
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="column is-one-half">
                <div className="tile is-ancestor">
                  <div className="tile is-4 is-parent  is-vertical">
                    { 
                      this.state.products.map((product, index) => 
                        <Product 
                          handleDeleteProduct={this.handleDeleteProduct} 
                          name={product} 
                          key={index}
                        />)
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
