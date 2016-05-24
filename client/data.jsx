import React from "react";

export default class Data extends React.Component {
  render() {
    return (
      <p>
        <span className="label label-primary">{this.props.people.length}</span> imported &nbsp;
        <span className="label label-success">xxx</span> charged &nbsp;
        <span className="label label-danger">xxx</span> errors &nbsp;
      </p>
    );
  }
}
