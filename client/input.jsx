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
            <p>This is a comma-separated input that accepts people in this fashion:</p>
            <code>
              email,cardnumber,month,year,cvc,zip
              email,cardnumber,month,year,cvc,zip
              email,cardnumber,month,year,cvc,zip
            </code>
            <p></p>
            <textarea id="people" className="form-control" rows="10" placeholder="Import people..."></textarea>
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    );
  }

}
