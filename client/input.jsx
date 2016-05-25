import { Meteor } from "meteor/meteor";
import React from "react";

export default class Input extends React.Component {

  submitted(e) {
    e.preventDefault();
    const people = document.getElementById("people").value;
    Meteor.call("importPeople", people);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitted}>
          <div className="form-group">
            <p>This is a line delineated input that accepts emails</p>
            <textarea id="people" className="form-control" rows="10" placeholder="Import people..."></textarea>
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    );
  }

}
