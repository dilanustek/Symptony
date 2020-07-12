import React, { Component } from "react";
import "./setSymptoms.css";
import Button from "react-bootstrap/Button";
import { Route } from "react-router-dom";
import { Symptom, allSymptomNames, SymptomAndFactors } from "./SymptomHelpers";
import SymptomTileButton from "./SymptomTileButton";

interface Props {
  setSymptomsAndFactors: (sympFac: SymptomAndFactors) => void;
  symptoms: SymptomAndFactors;
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

class SetSymptomsPage extends Component<Props, {}> {
  addSymptom = (newSymptom: Symptom) => {
    const symps = this.props.symptoms;

    if (!symps[newSymptom]) {
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
