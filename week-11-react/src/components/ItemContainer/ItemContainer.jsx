import React from "react";
import ItemList from "../ItemList/ItemList";

import "./ItemContainer.css";

class ItemContainer extends React.Component {
 
  handleSearch = (e) => {
    const text = e.target.value.toLowerCase();
    this.props.filterTechnician(text);
  };

  render() {
    return (
      <div className="card">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search"
            onChange={this.handleSearch}
          />
        </div>
        <ItemList
          items={this.props.technicians}
          removeTechnician={this.props.removeTechnician}
          editTechnician={this.props.editTechnician}
        />
      </div>
    );
  }
}

export default ItemContainer;
