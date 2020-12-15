import React from "react";
import Header from "../Header/Header";
import ItemsContainer from "../ItemContainer/ItemContainer";
import TechnicianInfo from "../TechnicianInfo/TechnicianInfo";
import techniciansJSON from "../../mock/technicians.json";
import "./Technicians.css";

class Technicians extends React.Component {
  state = {
    technicians: techniciansJSON,
    showAddNewTechnician: false,
    showEditTechnician: false,
    technicianToEdit: {},
  };

  addTechnician = (newTech) => {
    this.setState((state, props) => {
      const newState = { ...state };
      newState.technicians = [...state.technicians, newTech];
      return newState;
    });
  };

  removeTechnician = (id) => {
    this.setState((state, props) => {
      const newState = { ...state };
      newState.technicians = state.technicians.filter((t) => t.id !== id);
      return newState;
    });
  };

  editTechnician = (technician) => {
    // return console.log(technician);
    this.setState((prev, prop) => ({
      ...prev,
      technicians: [
        ...prev.technicians.filter((t) => t.id !== technician.id),
        technician,
      ],
    }));
  };

  showEditTechnician = (technician) => {
    const newExpertise = {};
    newExpertise.A = technician.expertise.includes("A");
    newExpertise.B = technician.expertise.includes("B");
    newExpertise.C = technician.expertise.includes("C");
    newExpertise.D = technician.expertise.includes("D");

    const technicianToEdit = { ...technician };
    technicianToEdit.expertise = newExpertise;

    this.setState((prev, prop) => ({
      ...prev,
      technicianToEdit: technicianToEdit,
      showEditTechnician: true,
    }));
  };

  closeEditTechnician = () => {
    this.setState((prev, prop) => ({
      ...prev,
      showEditTechnician: false,
    }));
  };

  filterTechnician = (text) => {
    this.setState((state, props) => {
      const newState = { ...state };

      newState.technicians = text
        ? state.technicians.filter((t) =>
            t.full_name.toLowerCase().includes(text)
          )
        : techniciansJSON;

      return newState;
    });
  };

  closeAddNew = () => {
    this.setState((prev, prop) => ({
      ...prev,
      showAddNewTechnician: false,
    }));
  };

  showAddNew = () => {
    this.setState((prev, prop) => ({
      ...prev,
      showAddNewTechnician: true,
    }));
  };

  render() {
    return (
      <div>
        <Header />
        <ItemsContainer
          technicians={this.state.technicians}
          filterTechnician={this.filterTechnician}
          removeTechnician={this.removeTechnician}
          editTechnician={this.showEditTechnician}
        />
        <button
          className="addNewTech"
          onClick={this.showAddNew}
          // onClick={this.editTechnician.bind(this, {
          //   id: 1,
          //   full_name: "XXXXXXXXXXXXXXXXXX",
          //   email: "rmicklewicz0@nyu.edu",
          //   address: "8 Independence Pass",
          //   phone: "+55 107 736 3535",
          //   expertise: ["B", "D", "C", "A"],
          // })}
        >
          +
        </button>
        {this.state.showAddNewTechnician && (
          <TechnicianInfo
            actionBtn={this.addTechnician}
            title="Add new technician"
            handleClose={this.closeAddNew}
          />
        )}
        {this.state.showEditTechnician && (
          <TechnicianInfo
            actionBtn={this.editTechnician}
            title="Edit technician"
            handleClose={this.closeEditTechnician}
            intialData={this.state.technicianToEdit}
            // intialData={{
            //   id: 1,
            //   full_name: "XXXXXXXXXXXXXXXXXX",
            //   email: "rmicklewicz0@nyu.edu",
            //   address: "8 Independence Pass",
            //   phone: "+55 107 736 3535",
            //   expertise: ["B", "D", "C", "A"],
            // }}
          />
        )}
      </div>
    );
  }
}

export default Technicians;
