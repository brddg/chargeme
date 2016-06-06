import React from "react";

export default class Charge extends React.Component {

  constructor() {
    super();
    this.state = {
      timer: 1,
    }
  }

  chargeEveryone(e) {
    e.preventDefault();
    e.currentTarget.innerText = "charging...";
    e.currentTarget.disabled = true;

    const peopleToCharge = this.props.peopleToCharge;

    const timerId = setInterval(() => {
      this.setState({
        timer: this.state.timer + 1,
      });
    }, 1000);

    let i = 0;
    const chargeId = setInterval(() => {
      this.setState({
        timer: 1,
      });

      let person = peopleToCharge[i];
      if (typeof person === "undefined") {
        console.log("stopping");
        clearInterval(timerId);
        clearInterval(chargeId);
        return;
      }

      i++;
      Meteor.call("runCharge", person._id, (err, result) => {
        if (err) {
          alert(`Error: Could not process transaction for ${person.email}`);
          return;
        } else {
          console.log(result);
        }
      });
    }, Meteor.settings.public.interval);
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
          Charge Everyone ({Meteor.settings.public.interval/1000}s interval)
        </button>

        <span className="label label-info">{this.state.timer}</span>

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
