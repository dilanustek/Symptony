import React, { Component } from "react";
import "./setSymptoms.css";
import { Route } from "react-router-dom";
import { Symptom, allSymptomNames, SymptomAndFactors } from "./SymptomHelpers";
import SymptomTileButton from "./SymptomTileButton";
import Button from "@material-ui/core/Button";
import { styled } from "@material-ui/core/styles";

interface Props {
  setSymptomsAndFactors: (sympFac: SymptomAndFactors) => void;
  symptoms: SymptomAndFactors;
}

const RouterButton = () => (
  <Route
    render={({ history }) => (
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          history.push("/home");
        }}
      >
        Next
      </Button>
    )}
  />
);

const NextBtn = styled(RouterButton)({
  width: "200px",
  height: "40px",
});

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
        <SymptomTileButton
          key={s}
          addSymptom={this.addSymptom}
          symptomName={s}
          symptomSelected={this.props.symptoms[s] !== undefined}
        />
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
        <div className="submitBtn">
          <NextBtn />
        </div>
      </div>
    );
  }
}

export default SetSymptomsPage;
