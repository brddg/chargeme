import React from "react";

import Data from "./data";
import Input from "./input";
import Charge from "./charge";
import Results from "./results";

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Charge Me</h1>
        <Data {...this.props} />
        <hr />
        <Input {...this.props} />
        <hr />
        <Charge {...this.props} />
        <hr />
        <Results {...this.props} />
      </div>
    );
  }
}

App.propTypes = {
  count: React.PropTypes.number,
  people: React.PropTypes.array,
  peopleToCharge: React.PropTypes.array,
  charged: React.PropTypes.array,
  errors: React.PropTypes.array,
};
