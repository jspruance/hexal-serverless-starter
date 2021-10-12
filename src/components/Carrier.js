import React, { Component, Fragment }  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class CarrierAdmin extends Component {

  state = {
    isEditMode: false,
    updatedcarriername: this.props.name,
    updateddrivername: this.props.drivername,
    updateddate: this.props.date,
    updatedtime: this.props.time,
    updatedtrucklocation: this.props.trucklocation,
    updatedtruckheading: this.props.truckheading,
    updatedtrucknumber: this.props.trucknumber,
    updatedtruckspeed: this.props.truckspeed,
    updatedfleettype: this.props.fleettype
  }

  handleProductEdit = event => {
    event.preventDefault();
    this.setState({ isEditMode: true });
  }

  handleEditSave = event => {
    event.preventDefault();
    this.setState({ isEditMode: false });
    this.props.handleUpdateCarrier(this.props.id, this.state.updatedcarriertname, this.state.updateddrivername, this.state.updateddate, 
    this.state.updatedtime, this.state.updatedtrucklocation, this.state.updatedtruckheading, this.state.updatedtrucknumber, this.state.updatedtruckspeed, this.state.updatedfleettype );
  }

  onAddCarrierNameChange = event => this.setState({ "updatedcarriername": event.target.value });
  onAddCarrierTruckDriverNameChange = event => this.setState({ "updateddrivername": event.target.value });
  onAddCarrierDateChange = event => this.setState({ "updateddate": event.target.value });
  onAddCarrierTimeChange = event => this.setState({ "updatedtime": event.target.value });
  onAddCarrierTuckLocationChange = event => this.setState({ "updatedtrucklocation": event.target.value });
  onAddCarrierTuckHeadingChange = event => this.setState({ "updatedtruckheading": event.target.value });
  onAddCarrierTuckNumberChange = event => this.setState({ "updatedtrucknumber": event.target.value });
  onAddCarrierTuckSpeedChange = event => this.setState({ "updatedtruckspeed": event.target.value });
  onAddCarrierFleetTypeChange = event => this.setState({ "updatedfleettype": event.target.value });
  
  render() {
    return (
      <div className="tile is-child box notification is-success">
        {
          this.props.isAdmin && 
          <Fragment>
            <a href="/" onClick={this.handleCarrierEdit} className="carrier-edit-icon">
              <FontAwesomeIcon icon="edit" />
            </a>
            <button onClick={event => this.props.handleDeleteCarrier(this.props.id, event)} className="delete"></button>
          </Fragment>
        }
        {
          this.state.isEditMode 
          ? <div>
              <p>Edit Carrier</p>
              <input 
                className="input is-medium"
                type="text" 
                placeholder="Enter Company name"
                value={this.state.updatedcarriername}
                onChange={this.onAddCarrierNameChange}
              />
              <input 
                className="input is-medium"
                type="text" 
                placeholder="Enter driver name"
                value={this.state.updateddrivername}
                onChange={this.onAddCarrierTruckDriverNameChange}
              />
              <input 
                className="input is-medium"
                type="text" 
                placeholder="Enter date"
                value={this.state.updateddate}
                onChange={this.onAddCarrierDateChange}
              />
              <input 
                className="input is-medium"
                type="text" 
                placeholder="Enter time"
                value={this.state.updatedtime}
                onChange={this.onAddCarrierTimeChange}
              />
              <input 
                className="input is-medium"
                type="text" 
                placeholder="Enter truck location"
                value={this.state.updatedtrucklocation}
                onChange={this.onAddCarrierTuckLocationChange}
              />
              <input 
                className="input is-medium"
                type="text" 
                placeholder="Enter truck heading"
                value={this.state.updatedtruckheading}
                onChange={this.onAddCarrierTuckHeadingChange}
              />
              <input 
                className="input is-medium"
                type="text" 
                placeholder="Enter truck number"
                value={this.state.updatedtrucknumber}
                onChange={this.onAddCarrierTuckNumberChange }
              />
              <input 
                className="input is-medium"
                type="text" 
                placeholder="Enter truck speed"
                value={this.state.updatedtruckspeed}
                onChange={this.onAddCarrierTuckSpeedChange }
              />
              <p className="carrier-id">id: { this.props.id }</p>
              <button type="submit" 
                className="button is-info is-small"
                onClick={ this.handleEditSave }
              >save</button>
            </div>
          : <div>
              <p className="carrier-title">{ this.props.name }</p>
              <p className="carrier-id">id: { this.props.id }</p>
              <p className="carrier-drivername">driver name: { this.props.drivername }</p>
              <p className="carrier-date">date: { this.props.date }</p>
              <p className="carrier-time">time: { this.props.time }</p>
              <p className="carrier-trucklocation">truck location: { this.props.trucklocation }</p>
              <p className="carrier-truckheading">truck heading: { this.props.truckheading }</p>
              <p className="carrier-trucknumber">truck number: { this.props.trucknumber }</p>
              <p className="carrier-truckspeed">truck speed: { this.props.truckspeed }</p>
            </div>
        }
      </div>
    )
  }
}
