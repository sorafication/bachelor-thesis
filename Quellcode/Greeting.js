import React from 'react'

export class Greeting extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: "BLA",
      }
    }
      render() {
      return (
          <div>
        <h1> Herzlich Willkommen bei dem Bachelorprojekt Kumo von { this.props.name } </h1>
        <h1> an der Hochschule Niederrhein </h1>

        </div>

      );
    }
  }
