import React, { Component } from "react";
import "./setSymptoms.css";
import Button from "react-bootstrap/Button";
import { Route } from "react-router-dom";
import {
  Symptom,
  Factor,
  allSymptomNames,
  SymptomAndFactors,
} from "./SymptomHelpers";
import SymptomTileButton from "./SymptomTileButton";

interface State {
  // symptoms: { [symptom in Symptom]: Factor[] } | {};
  symptoms: SymptomAndFactors | null;
}

const RouterButton = () => (
  <Route
    render={({ history }) => (
      <Button
        variant="primary"
        onClick={() => {
          history.push("/home");
        }}
      >
        Next
      </Button>
    )}
  />
);

class SetSymptomsPage extends Component<{}, State> {
  state: State = {
    symptoms: {},
  };

  addSymptom = (newSymptom: Symptom) => {
    const symps = this.state.symptoms;

    if (!symps) {
      let newSymps: SymptomAndFactors = {};
      newSymps[newSymptom] = [];
    } else if (!symps[newSymptom]) {
      symps[newSymptom] = [];
      this.setState({
        symptoms: symps,
      });
    }
  };

  getSymptomTiles() {
    let sympTiles = [];
    for (let s of allSymptomNames) {
      sympTiles.push(
        <SymptomTileButton addSymptom={this.addSymptom} symptomName={s} />
      );
    }

    return sympTiles;
  }

  render() {
    return (
      <div className="onboardContainer">
        <div className="breadCrumbs">Customize (1/2)</div>
        <div className="onboardTitle">Which symptoms do you want to track?</div>
        <div className="sympTiles">{this.getSymptomTiles()}</div>
        <RouterButton />
      </div>
    );
  }
}

export default SetSymptomsPage;
