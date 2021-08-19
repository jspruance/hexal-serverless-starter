import React, { Component, Fragment }  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class ProductAdmin extends Component {

  state = {
    isEditMode: false,
    updatedproductname: this.props.name,
    updateddrivername: this.props.drivername,
    updateddate: this.props.date,
    updatedtime: this.props.time,
    updatedtrucklocation: this.props.trucklocation,
    updatedtruckheading: this.props.truckheading,
    updatedtrucknumber: this.props.trucknumber,
    updatedtruckspeed: this.props.truckspeed,
  }

  handleProductEdit = event => {
    event.preventDefault();
    this.setState({ isEditMode: true });
  }

  handleEditSave = event => {
    event.preventDefault();
    this.setState({ isEditMode: false });
    this.props.handleUpdateProduct(this.props.id, this.state.updatedproductname, this.state.updateddrivername, this.state.updateddate, 
    this.state.updatedtime, this.state.updatedtrucklocation, this.state.updatedtruckheading, this.state.updatedtrucknumber, this.state.updatedtruckspeed );
  }

  onAddProductNameChange = event => this.setState({ "updatedproductname": event.target.value });
  onAddProductTruckDriverNameChange = event => this.setState({ "updateddrivername": event.target.value });
  onAddProductDateChange = event => this.setState({ "updateddate": event.target.value });
  onAddProductTimeChange = event => this.setState({ "updatedtime": event.target.value });
  onAddProductTuckLocationChange = event => this.setState({ "updatedtrucklocation": event.target.value });
  onAddProductTuckHeadingChange = event => this.setState({ "updatedtruckheading": event.target.value });
  onAddProductTuckNumberChange = event => this.setState({ "updatedtrucknumber": event.target.value });
  onAddProductTuckSpeedChange = event => this.setState({ "updatedtruckspeed": event.target.value });
  
  render() {
    return (
      <div className="tile is-child box notification is-success">
        {
          this.props.isAdmin && 
          <Fragment>
            <a href="/" onClick={this.handleProductEdit} className="product-edit-icon">
              <FontAwesomeIcon icon="edit" />
            </a>
            <button onClick={event => this.props.handleDeleteProduct(this.props.id, event)} className="delete"></button>
          </Fragment>
        }
        {
          this.state.isEditMode 
          ? <div>
              <p>Edit Company</p>
              <input 
                className="input is-medium"
                type="text" 
                placeholder="Enter Company name"
                value={this.state.updatedproductname}
                onChange={this.onAddProductNameChange}
              />
              <input 
                className="input is-medium"
                type="text" 
                placeholder="Enter driver name"
                value={this.state.updateddrivername}
                onChange={this.onAddProductTruckDriverNameChange}
              />
              <input 
                className="input is-medium"
                type="text" 
                placeholder="Enter date"
                value={this.state.updateddate}
                onChange={this.onAddProductDateChange}
              />
              <input 
                className="input is-medium"
                type="text" 
                placeholder="Enter time"
                value={this.state.updatedtime}
                onChange={this.onAddProductTimeChange}
              />
              <input 
                className="input is-medium"
                type="text" 
                placeholder="Enter truck location"
                value={this.state.updatedtrucklocation}
                onChange={this.onAddProductTuckLocationChange}
              />
              <input 
                className="input is-medium"
                type="text" 
                placeholder="Enter truck heading"
                value={this.state.updatedtruckheading}
                onChange={this.onAddProductTuckHeadingChange}
              />
              <input 
                className="input is-medium"
                type="text" 
                placeholder="Enter truck number"
                value={this.state.updatedtrucknumber}
                onChange={this.onAddProductTuckNumberChange }
              />
              <input 
                className="input is-medium"
                type="text" 
                placeholder="Enter truck speed"
                value={this.state.updatedtruckspeed}
                onChange={this.onAddProductTuckSpeedChange }
              />
              <p className="product-id">id: { this.props.id }</p>
              <button type="submit" 
                className="button is-info is-small"
                onClick={ this.handleEditSave }
              >save</button>
            </div>
          : <div>
              <p className="product-title">{ this.props.name }</p>
              <p className="product-id">id: { this.props.id }</p>
              <p className="product-drivername">driver name: { this.props.drivername }</p>
              <p className="product-date">date: { this.props.date }</p>
              <p className="product-time">time: { this.props.time }</p>
              <p className="product-trucklocation">truck location: { this.props.trucklocation }</p>
              <p className="product-truckheading">truck heading: { this.props.truckheading }</p>
              <p className="product-trucknumber">truck number: { this.props.trucknumber }</p>
              <p className="product-truckspeed">truck speed: { this.props.truckspeed }</p>
            </div>
        }
      </div>
    )
  }
}
