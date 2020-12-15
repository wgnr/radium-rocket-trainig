import React from "react";
import Item from "../Item/Item";

import "./ItemList.css";

class ItemList extends React.Component {
  render() {
    return (
      <table>
        <thead>
          <tr className="tr-th">
            <th className="th">Name</th>
            <th className="th">ID</th>
            <th className="th">Email</th>
            <th className="th">Expertise</th>
            <th className="th">Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.props.items.map((item) => (
            <Item
              key={item.id}
              item={item}
              removeTechnician={this.props.removeTechnician}
              editTechnician={this.props.editTechnician}
            />
          ))}
        </tbody>
      </table>
    );
  }
}

export default ItemList;
