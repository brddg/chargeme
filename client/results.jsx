import React from "react";

export default class Results extends React.Component {

  render() {
    return (
      <div>
        <h3>Charged</h3>
        {this.props.charged.map((charge, i) => {
          return <p key={i}>{charge.email}</p>
        })}
        <h3>Errors</h3>
        {this.props.errors.map((error, i) => {
          return <p key={i}>{error.email}</p>
        })}
      </div>
    );
  }

}
