import React from "react";

import "./Item.css";

class Item extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <tr>
        <td className="td td-name">{item.full_name}</td>
        <td className="td td-id">{item.id}</td>
        <td className="td td-email">{item.email}</td>
        <td className="td td-name">{item.expertise.join(", ")}</td>
        <td className="td td-name">
          <button onClick={() => this.props.editTechnician(item)}>
            ✏
          </button>
          <button onClick={() => this.props.removeTechnician(item.id)}>
            ❌
          </button>
        </td>
      </tr>
    );
  }
}

export default Item;
