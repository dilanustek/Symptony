import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./setSymptoms.css";
import Button from "react-bootstrap/Button";
import { Route } from "react-router-dom";

const RouterButton = () => (
  <Route
    render={({ history }) => (
      <Button
        type="button"
        onClick={() => {
          history.push("/home");
        }}
      >
        Next
      </Button>
    )}
  />
);

class SetSymptomsPage extends Component {
  render() {
    return (
      <div className="onboardContainer">
        <div className="breadCrumbs">Customize (1/2)</div>
        <div className="onboardTitle">Which symptoms do you want to track?</div>
        <RouterButton />
      </div>
    );
  }
}

export default SetSymptomsPage;
