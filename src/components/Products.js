import React, { Component, Fragment } from 'react';
import Product from './Product';
import axios from "axios";   // axios is an http wrapper similiar to fetch; this library allows us to do things like axios.get, axios.post and so forth.
const config = require('../config.json');

export default class Products extends Component {

  state = {
    newproduct: null,
    products: []           // Here we want to set the products array using this.setState method() below.
  }

  fetchProducts = async () => {         
    // async/await used with ES6/ES7...
    // here we add our call to AWS API Gateway to fetch products
    // then set them in state
   try {
      const res = await axios.get(`${config.api.invokeUrl}/products`);          // Here we pass in the invokeUrl which is imported in at the top...
      this.setState({ products: res.data });                                    // As with React we never set state directtly, instead we use a helper called this.setState and pass in the new state. The res.data contain the new array of products.
    }catch (err) {
      console.log(`An error has occurred: ${err}`);
    }
    
  }

  onAddProductNameChange = event => this.setState({ newproduct: { ...this.state.newproduct, "productname": event.target.value } });
  onAddProductIdChange = event => this.setState({ newproduct: { ...this.state.newproduct, "id": event.target.value } });
  onAddProductTruckDriverNameChange = event => this.setState({ newproduct: { ...this.state.newproduct, "drivername": event.target.value } });
  onAddProductDateChange = event => this.setState({ newproduct: { ...this.state.newproduct, "date": event.target.value } });
  onAddProductTimeChange = event => this.setState({ newproduct: { ...this.state.newproduct, "time": event.target.value } });
  onAddProductTuckLocationChange = event => this.setState({ newproduct: { ...this.state.newproduct, "trucklocation": event.target.value } });
  onAddProductTuckHeadingChange = event => this.setState({ newproduct: { ...this.state.newproduct, "truckheading": event.target.value } });
  onAddProductTuckNumberChange = event => this.setState({ newproduct: { ...this.state.newproduct, "trucknumber": event.target.value } });
  onAddProductTuckSpeedChange = event => this.setState({ newproduct: { ...this.state.newproduct, "truckspeed": event.target.value } });
  onAddProductFleetTypeChange = event => this.setState({ newproduct: { ...this.state.newproduct, "fleettype": event.target.value } });
  onAddProductRateChange = event => this.setState({ newproduct: { ...this.state.newproduct, "rate": event.target.value } });
  onAddProductTotalMilesChange = event => this.setState({ newproduct: { ...this.state.newproduct, "totalmiles": event.target.value } });
 
  componentDidMount = () => {           // This is a React life-cycle method: any component inside here will fire when components is initialized.
    this.fetchProducts();
  }

  render() {
    return (
      <Fragment>
        <section className="section">
          <div className="container">
            <h1>Carrier Freightliner</h1>
            <p className="subtitle is-5">Real-time truck fleet statisics and product delivery:</p>
            <br />
            <div className="columns">
              <div className="column">
                <div className="tile is-ancestor">
                  <div className="tile is-12 is-parent is-horizontal">
                    { 
                      this.state.products && this.state.products.length > 0
                      ? this.state.products.map(product => <Product name={product.productname} id={product.id} key={product.id} 
                        drivername={product.drivername} date={product.date} time={product.time} trucklocation={product.trucklocation} 
                        truckheading={product.truckheading} trucknumber={product.trucknumber} truckspeed={product.truckspeed} fleettype={product.fleettype} 
                        rate={product.rate} totalmiles={product.totalmiles}/>) 

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
