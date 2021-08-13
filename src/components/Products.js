import React, { Component, Fragment } from 'react';
import Product from './Product';
import axios from "axios";   // similiar to fetch, this library allows us to do axios.get, axios.post and so forth.
const config = require('../config.json');

export default class Products extends Component {

  state = {
    newproduct: null,
    products: [] // we want to set the products array using this.setState method() below.
  }

  fetchProducts = async () => {
    // add call to AWS API Gateway to fetch products here
    // then set them in state
    try {
      const res = await axios.get(`${config.api.invokeUrl}/products`); // pass in the invokeUrl which is imported at the top
      this.setState({ products: res.data });  // with React we never set state directtly, instead we use a helper called this.setState and pass in the new state. The res.data contain the new array of products.
    }catch (err) {
      console.log(`An error has occurred: ${err}`);
    }
    
  }

  componentDidMount = () => {  // A React life-cycle method: any component inside here will fire when components is initialized.
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
                      this.state.products && this.state.products.length > 0
                      ? this.state.products.map(product => <Product name={product.productname} id={product.id} key={product.id} />)
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
