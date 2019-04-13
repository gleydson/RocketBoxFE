import React, { Component } from "react";
import api from "../../services/api";

import logo from "../../assets/images/logo.svg";

import "./styles.css";

export default class MainPage extends Component {
  state = {
    newBox: ""
  };

  handleSubmit = async event => {
    event.preventDefault();
    const response = await api.post("boxes", {
      title: this.state.newBox
    });
    this.props.history.push(`/box/${response.data._id}`);
  };

  handleInputChange = event => this.setState({ newBox: event.target.value });

  render() {
    return (
      <div id="main-container">
        <form onSubmit={this.handleSubmit} action="">
          <img src={logo} alt="" />
          <input
            placeholder="Criar uma box"
            value={this.state.newBox}
            onChange={this.handleInputChange}
          />
          <button type="submit">Criar</button>
        </form>
      </div>
    );
  }
}
