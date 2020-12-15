import React from "react";

import "./TechnicianInfo.css";

class TechnicianInfo extends React.Component {
  static defaultProps = {
    intialData: {
      id: "",
      full_name: "",
      email: "",
      address: "",
      phone: "",
      expertise: {
        A: false,
        B: false,
        C: false,
        D: false,
      },
    },
  };

  state = {
    form: this.props.intialData,
  };

  handleOnSubmit = (e) => {
    e.preventDefault();

    const newTech = { ...this.state.form };

    const expertise = [];
    if (newTech.expertise.A) expertise.push("A");
    if (newTech.expertise.B) expertise.push("B");
    if (newTech.expertise.C) expertise.push("C");
    if (newTech.expertise.D) expertise.push("D");
    newTech.expertise = expertise;

    this.props.actionBtn(newTech);
    this.props.handleClose(this);
  };

  handleOnChange = (e) => {
    if (e.target.type === "checkbox")
      return this.setState((pState, prop) => {
        const nState = { ...pState };
        nState.form.expertise[e.target.name] = e.target.checked;
        return nState;
      });

    this.setState((pState, prop) => {
      const nState = { ...pState };
      nState.form[e.target.name] = e.target.value;
      return nState;
    });
  };

  render() {
    return (
      <>
        <div className="blockScreen"></div>
        <div className="techInfo">
          <h2>{this.props.title}</h2>
          <form onSubmit={this.handleOnSubmit}>
            <label>
              <span>Full Name</span>
              <br />
              <input
                type="text"
                value={this.state.form.full_name}
                name="full_name"
                onChange={this.handleOnChange}
              />
            </label>
            <label>
              <span>Id</span>
              <br />
              <input
                type="text"
                value={this.state.form.id}
                name="id"
                onChange={this.handleOnChange}
              />
            </label>
            <label>
              <span>Address</span>
              <br />
              <input
                type="text"
                value={this.state.form.address}
                name="address"
                onChange={this.handleOnChange}
              />
            </label>
            <label>
              <span>Phone</span>
              <br />
              <input
                type="text"
                value={this.state.form.phone}
                name="phone"
                onChange={this.handleOnChange}
              />
            </label>
            <label>
              <span>Email</span>
              <br />
              <input
                type="text"
                value={this.state.form.email}
                name="email"
                onChange={this.handleOnChange}
              />
            </label>
            <div className="checkboxes">
              <span>Expertise</span>
              <br />
              <input
                type="checkbox"
                name="A"
                value="A"
                id="A"
                checked={this.state.form.expertise.A}
                onChange={this.handleOnChange}
              />
              <label htmlFor="A">A</label>
              <br />
              <input
                type="checkbox"
                name="B"
                value="B"
                id="B"
                checked={this.state.form.expertise.B}
                onChange={this.handleOnChange}
              />
              <label htmlFor="B">B</label>
              <br />
              <input
                type="checkbox"
                name="C"
                value="C"
                id="C"
                checked={this.state.form.expertise.C}
                onChange={this.handleOnChange}
              />
              <label htmlFor="C">C</label>
              <br />
              <input
                type="checkbox"
                name="D"
                value="D"
                id="D"
                checked={this.state.form.expertise.D}
                onChange={this.handleOnChange}
              />
              <label htmlFor="D">D</label>
            </div>
            <input
              type="button"
              value="Cancel"
              onClick={this.props.handleClose}
            />
            <input type="submit" value="Confirm" />
          </form>
        </div>
      </>
    );
  }
}

export default TechnicianInfo;
