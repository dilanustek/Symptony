import React, { Component } from "react";
import { Link } from "react-router-dom";

class SetSymptomsPage extends Component {
  render() {
    return (
      <>
        <div>set symptoms page</div>
        <Link to="/home"> Submit Symptoms </Link>
      </>
    );
  }
}

export default SetSymptomsPage;
