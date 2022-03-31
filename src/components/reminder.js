import React, { Component } from "react";

class Reminder extends Component {
  render() {
    return (
      <div className="reminder">
        <h3>Selección previa: {this.props.previousChoice}</h3>
        <h4>Historial de elecciones: </h4>
        <ul>{this.props.history}</ul>
      </div>
    );
  }
}

export { Reminder };
