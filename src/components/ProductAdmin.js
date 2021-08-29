import React, { Component, Fragment } from 'react';
import Product from './Product';
import axios from "axios"; // this ia a library, like fetch it uses axios.get, axios.put, axios.post and so forth...

const config = require('../config.json');

export default class ProductAdmin extends Component {

  state = {
    newproduct: { 
      "productname": "", 
      "id": "", 
      "fleetype": ""
    },
    products: []
  }

  handleAddProduct = async (id, event) => {
    event.preventDefault();
    // add call to AWS API Gateway add product endpoint 
    try {
      const params = {
        "id": id,
        "productname": this.state.newproduct.productname,
        "fleetype": this.state.newproduct.fleetype,
        
      };
      await axios.post(`${config.api.invokeUrl}/products/{id}`, params);
      this.setState({ products: [...this.state.products, this.state.newproduct] });         // using the spread operator [...] to add in the current state.
      this.setState({ newproduct: { "productname": "", "id": "", "fleettype": ""}});        // now, reset the state to make sure it's a property initialized to empty strings again.
    
    }catch (err) {
      console.log('An error has occurred: ${err}');
    }
    
  }

  handleUpdateProduct = async (id, name) => {
    // add call to AWS API Gateway update product endpoint here
    try {
      const params = {
        "id": id,
        "productname": name,
        
      };
      await axios.patch(`${config.api.invokeUrl}/products/{id}`, params);
      const productToUpdate = [...this.state.products].find(product => product.id === id);
      const updatedProducts = [...this.state.products].filter(product => product.id !== id);
      productToUpdate.productname = name;
      

      updatedProducts.push(productToUpdate);
      this.setState({products: updatedProducts});
    }catch (err) {
      console.log(`Error updating product: ${err}`); 
    }  
  }

  handleDeleteProduct = async (id, event) => {
    event.preventDefault();
    // add call to AWS API Gateway delete product endpoint here
    try {
      await axios.delete(`${config.api.invokeUrl}/products/{id}`);      //.. passing in products/{id} as path parameter.
      const updatedProducts = [...this.state.products].filter(product => product.id !== id);
      this.setState({products: updatedProducts});
    }catch (err) {
      console.log('Unable to delete product: ${err}');
    }   

  }

  fetchProducts = async () => {
    // add call to AWS API Gateway to fetch products here
    // then set them in state
    try {
      const res = await axios.get(`${config.api.invokeUrl}/products`);                // pass in the invokeUrl we import from const config.json at the top.
      const products = res.data;
      this.setState({ products: products });                                          // with React we never set state directtly, instead we use a helper called this.setState and pass in the new state. The res.data contain the new array of products.
    }catch (err) {
      console.log(`An error has occurred: ${err}`);
    }
    
  }

  onAddProductNameChange = event => this.setState({ newproduct: { ...this.state.newproduct, "productname": event.target.value } });
  onAddProductIdChange = event => this.setState({ newproduct: { ...this.state.newproduct, "id": event.target.value } });
  onAddProductIdChange = event => this.setState({ newproduct: { ...this.state.newproduct, "fleettype": event.target.value } });
  
  componentDidMount = () => {
    this.fetchProducts();
  }

  render() {
    return (
      <Fragment>
        <section className="section">
          <div className="container">
            <h1>Copy-That! Manager</h1>
            <p className="subtitle is-5">Add or remove truck fleet stats/delivery stats using the form below:</p>
            <br />
            <div className="columns">
              <div className="column is-one-third">
                <form onSubmit={event => this.handleAddProduct(this.state.newproduct.id, event)}>
                  <div className="field has-addons">
                    <div className="control">
                      <input 
                        className="input is-medium"
                        type="text" 
                        placeholder="Courier"
                        value={this.state.newproduct.productname}
                        onChange={this.onAddProductNameChange}
                      />
                    </div>
                    <div className="control">
                      <input 
                        className="input is-medium"
                        type="text" 
                        placeholder="Courier id"
                        value={this.state.newproduct.id}
                        onChange={this.onAddProductIdChange}
                      />
                    </div>
                    <div className="control">
                      <button type="submit" className="button is-primary is-medium">
                        Add
                      </button>
                    </div>
                  </div>
                </form>

              <div className="columns">
                <div className="column is-one-third"><br></br>
                  <img src="timeismoney.png" width="200" height="140" alt="time is money" />
                </div>
              </div>

              </div>
              <div className="column is-three-quarters">
                <div className="tile is-ancestor">
                  <div className="tile is-12 is-parent  is-horizontal">
                    { 
                      this.state.products.map((product, index) => 
                        <Product 
                          isAdmin={true}
                          handleUpdateProduct={this.handleUpdateProduct}
                          handleDeleteProduct={this.handleDeleteProduct} 
                          name={product.productname} 
                          id={product.id}
                          key={product.id}
                          date={product.date}
                          drivername={product.drivername}
                          time={product.time} 
                          truckheading={product.truckheading}  
                          trucklocation={product.trucklocation}  
                          trucknumber={product.trucknumber}  
                          truckspeed={product.truckspeed}
                          fleettype={product.fleettype}

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
