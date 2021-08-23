import React, { Component, Fragment } from 'react';
import Carrier from './Carrier';
import axios from "axios";   // http wrapper similiar to fetch; this library allows us to do things like axios.get, axios.post and so forth.
const config = require('../config.json');

export default class Carriers extends Component {

  state = {
    newcarrier: null,
    carriers: [] // we want to set the products array using this.setState method() below.
  }

  fetchCarriers = async () => {    // async/await used with ES6/ES7
    // add our call to AWS API Gateway to fetch products here
    // then set them in state

    try {
      const res = await axios.get(`${config.api.invokeUrl}/products`);          // pass in the invokeUrl which is imported at the top
      this.setState({ carriers: res.data });                                    // with React we never set state directtly, instead we use a helper called this.setState and pass in the new state. The res.data contain the new array of products.
    }catch (err) {
      console.log(`An error has occurred: ${err}`);
    }
    
  }

  onAddCarrierNameChange = event => this.setState({ newcarrier: { ...this.state.newcarrier, "carriername": event.target.value } });
  onAddCarrierIdChange = event => this.setState({ newcarrier: { ...this.state.newcarrier, "id": event.target.value } });
  onAddCarrierTruckDriverNameChange = event => this.setState({ newcarrier: { ...this.state.newcarrier, "drivername": event.target.value } });
  onAddCarrierDateChange = event => this.setState({ newcarrier: { ...this.state.newcarrier, "date": event.target.value } });
  onAddCarrierTimeChange = event => this.setState({ newcarrier: { ...this.state.newcarrier, "time": event.target.value } });
  onAddCarrierTuckLocationChange = event => this.setState({ newcarrier: { ...this.state.newcarrier, "trucklocation": event.target.value } });
  onAddCarrierTuckHeadingChange = event => this.setState({ newcarrier: { ...this.state.newcarrier, "truckheading": event.target.value } });
  onAddCarrierTuckNumberChange = event => this.setState({ newcarrier: { ...this.state.newcarrier, "trucknumber": event.target.value } });
  onAddCarrierTuckSpeedChange = event => this.setState({ newcarrier: { ...this.state.newcarrier, "truckspeed": event.target.value } });
  onAddCarrierFleetTypeChange = event => this.setState({ newcarrier: { ...this.state.newcarrier, "fleettype": event.target.value } });


  componentDidMount = () => {  // A React life-cycle method: any component inside here will fire when components is initialized.
    this.fetchProducts();
  }

  render() {
    return (
      <Fragment>
        <section className="section">
          <div className="container">
            <h1>Truck Fleet Status</h1>
            <p className="subtitle is-5">Manage real-time truck fleet statisics and product delivery:</p>
            <br />
            <div className="columns">
              <div className="column">
                <div className="tile is-ancestor">
                  <div className="tile is-4 is-parent  is-vertical">
                    { 
                      this.state.carriers && this.state.carriers.length > 0
                      ? this.state.carriers.map(carrier => <Carrier name={carrier.carriername} id={carrier.id} key={carrier.id} drivername={carrier.drivername} date={carrier.date} time={carrier.time} trucklocation={carrier.trucklocation} truckheading={carrier.truckheading} trucknumber={carrier.trucknumber} truckspeed={carrier.truckspeed} />)
                      : <div className="tile notification is-warning">No carriers available</div>
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
