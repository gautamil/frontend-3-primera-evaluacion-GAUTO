import React, { Component } from "react";
import Swal from "sweetalert2";
import data from "./data.json";
import { Options } from "./options";
import { Reminder } from "./reminder";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: 1,
      destinationId: "1",
      previousChoice: "",
      history: [],
    };
  }

  componentDidUpdate(previousState) {
    if (previousState.steps !== this.state.steps) {
      this.state.history.push(this.state.previousChoice);
    }
  }

  nextArch = (click) => {
    let buttonId = click.target.id;
    let destination = this.state.steps + 1 + buttonId;

    if (this.state.steps >= 5) {
      Swal.fire({
        title: "Hasta aquí llegamos",
        html: "<a href= window.location.reload>Volver a empezar</a>",
      });
    } else {
      this.setState({
        steps: this.state.steps + 1,
        destinationId: destination,
        previousChoice: buttonId.toUpperCase(),
      });
    }
  };

  render() {
    return (
      <div className="layout">
        <h1 className="story">
          {data.filter((item) => item.id === this.state.destinationId)[0].story}
        </h1>
        <Options
          nextArch={this.nextArch}
          optionA={
            data.filter((item) => item.id === this.state.destinationId)[0]
              .options.a
          }
          optionB={
            data.filter((item) => item.id === this.state.destinationId)[0]
              .options.b
          }
        />
        <Reminder
          previousChoice={this.state.previousChoice}
          history={this.state.history.map((e, i) => (
            <li key={i}>{e}</li>
          ))}
        />
      </div>
    );
  }
}

export default Main;