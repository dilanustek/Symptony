import React, { Component } from "react";
import "./setSymptoms.css";
import { Symptom, SymptomsAndFactors, SymptomNames } from "./SymptomHelpers";
import TileButton from "./TileButton";
import NextButton from "./NextButton";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

interface Props {
  setSymptomsAndFactors: (symptom: Symptom) => void;
  symptomsAndFactors: SymptomsAndFactors;
}

class SetSymptomsPage extends Component<Props, {}> {
  getSymptomTiles() {
    const symptoms = Object.values(Symptom);

    return symptoms.map((symptom) => (
      <Grid item xs key={symptom}>
        <TileButton
          key={symptom}
          toggleSymptom={() => this.props.setSymptomsAndFactors(symptom)}
          tileName={SymptomNames[symptom]}
          isSelected={this.props.symptomsAndFactors[symptom] !== undefined}
        />
      </Grid>
    ));
  }

  render() {
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
        <div className="submitBtn">
          {Object.entries(this.props.symptomsAndFactors).length === 0 ? null : (
            <NextButton label="Next" path="/setFactors/0" />
          )}
        </div>
      </div>
    );
  }
}

export default SetSymptomsPage;
