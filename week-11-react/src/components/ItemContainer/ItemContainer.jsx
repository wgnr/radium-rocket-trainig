import React from "react";
import ItemList from "../ItemList/ItemList";

import "./ItemContainer.css";

const data = [
  {
    name: "Juancito",
    id: 123,
    email: "j@dsdf.com",
    expertise: ["A", "C", "B"],
    // actions: ,
  },
  {
    name: "Juancito",
    id: 12313,
    email: "j@dsdf.com",
    expertise: ["A", "C", "B"],
    // actions: ,
  },
];
class ItemContainer extends React.Component {
  handleSearch = (e) => {
    const text = e.target.value;
    if (!text) return "";
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
        <ItemList items={data} />
      </div>
    );
  }
}

export default ItemContainer;
