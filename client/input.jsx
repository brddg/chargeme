import { Meteor } from "meteor/meteor";
import React from "react";

export default class Input extends React.Component {

  submitted(e) {
    e.preventDefault();
    const beg = new Date();
    for (let i = 0; i < 100; i++) {
      Meteor.call("runCharge", "meial@me.com", (err, result) => {
        if (err) {
          alert(err);
        } else {
          console.log(result);
          if (i === 99) {
            const end = new Date();
            console.log((end - beg) / 1000)
          }
        }
      });
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitted}>
          <div className="form-group">
            <textarea className="form-control" rows="10" placeholder="Import people..."></textarea>
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    );
  }

}
