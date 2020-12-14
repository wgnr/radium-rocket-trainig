import React from "react";
import Header from "../Header/Header";
import ItemsContainer from "../ItemContainer/ItemContainer";

import "./Technicians.css";

class Technicians extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ItemsContainer />
      </div>
    );
  }
}

export default Technicians;
