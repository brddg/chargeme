import React from "react";

export default class Data extends React.Component {
  render() {
    return (
      <p>
        <span className="label label-primary">{this.props.people.length}</span> imported &nbsp;
        <span className="label label-success">{this.props.charged.length}</span> charged &nbsp;
        <span className="label label-danger">{this.props.errors.length}</span> errors &nbsp;
      </p>
    );
  }
}
