import React, { Component } from "react";
import "./setSymptoms.css";
import { Symptom, SymptomsAndFactors, SymptomNames } from "./SymptomHelpers";
import TileButton from "./TileButton";
import NextButton from "./NextButton";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

interface Props {
  setSymptomsAndFactors: (symptomsAndFactors: SymptomsAndFactors) => void;
  symptomsAndFactors: SymptomsAndFactors;
}

class SetSymptomsPage extends Component<Props, {}> {
  toggleSymptom = (newSymptom: Symptom) => {
    const symptomsAndFactors = this.props.symptomsAndFactors;
    if (!symptomsAndFactors[newSymptom]) {
      symptomsAndFactors[newSymptom] = [];
    } else {
      delete symptomsAndFactors[newSymptom];
    }
    this.props.setSymptomsAndFactors(symptomsAndFactors);
  };

  getSymptomTiles() {
    const symptoms = Object.values(Symptom);

    return symptoms.map((symptom) => (
      <Grid item xs key={symptom}>
        <TileButton
          key={symptom}
          toggleSymptom={() => this.toggleSymptom(symptom)}
          tileName={SymptomNames[symptom]}
          isSelected={this.props.symptomsAndFactors[symptom] !== undefined}
        />
      </Grid>
    ));
  }

  render() {
    console.log(this.props.symptomsAndFactors);
    return (
      <div className="onboardContainer">
        <div className="top">
          <Typography variant="h3">
            Which symptoms do you want to track?
          </Typography>
          <div className="sympTiles">
            <Grid container spacing={2}>
              {this.getSymptomTiles()}
            </Grid>
          </div>
        </div>
        {Object.entries(this.props.symptomsAndFactors).length === 0 ? (
          <div className="submitBtn"></div>
        ) : (
          <div className="submitBtn">
            <NextButton label="Next" path="/setFactors/0" />
          </div>
        )}
      </div>
    );
  }
}

export default SetSymptomsPage;
