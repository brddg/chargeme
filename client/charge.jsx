import React from "react";

export default class Charge extends React.Component {

  chargeEveryone(e) {
    e.preventDefault();
    e.currentTarget.innerText = "charging...";
    e.currentTarget.disabled = true;
    this.props.peopleToCharge.map((person) => {
      Meteor.call("runCharge", person._id, (err, result) => {
        if (err) {
          alert(`Error: Could not process transaction for ${person.email}`);
          return;
        } else {
          console.log(result);
        }
      });
    });
  }

  deleteEveryone(e) {
    e.preventDefault();
    e.currentTarget.innerText = "deleting...";
    e.currentTarget.disabled = true;

    Meteor.call("deleteEveryone", (err, result) => {
      if (err) {
        alert(err);
      } else {
        e.currentTarget.innerText = "Delete Everyone";
        e.currentTarget.disabled = false;
      }
    });
  }

  render() {
    return (
      <div>
        <button
          className="btn btn-success"
          onClick={this.chargeEveryone.bind(this)}
        >
          Charge Everyone
        </button>

        <button
          className="btn btn-danger"
          onClick={this.deleteEveryone.bind(this)}
        >
          Delete Everyone
        </button>
      </div>

    );
  }
}
