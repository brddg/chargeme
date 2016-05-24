import React from "react";

import Data from "./data";
import Input from "./input";

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Charge Me</h1>
        <Data {...this.props} />
        <hr />
        <Input {...this.props} />
      </div>
    );
  }
}

App.propTypes = {
  count: React.PropTypes.number,
  people: React.PropTypes.array,
};
