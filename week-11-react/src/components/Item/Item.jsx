import React from "react";

import "./Item.css";

class Item extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <tr>
        <td className="td td-name">{item.name}</td>
        <td className="td td-id">{item.id}</td>
        <td className="td td-email">{item.email}</td>
        <td className="td td-name">{item.expertise}</td>
        <td className="td td-name">Botones</td>
      </tr>
    );
  }
}

export default Item;
