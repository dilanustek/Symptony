import React, { Component } from "react";
import {
  Factor,
  FactorNames,
  SymptomsAndFactors,
  Symptom,
  SymptomNames,
} from "./SymptomHelpers";
import "./setSymptoms.css";
import TileButton from "./TileButton";
import NextButton from "./NextButton";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

interface Props {
  setSymptomsAndFactors: (symptom: Symptom, factor: Factor) => void;
  symptomsAndFactors: SymptomsAndFactors;
  symptomIndexParams: any;
}

class SetFactorsPage extends Component<Props, {}> {
  getFactorTiles(symptom: Symptom) {
    const factors = Object.values(Factor);

    return factors.map((factor) => (
      <Grid item xs key={factor}>
        <TileButton
          key={factor}
          onClick={() => this.props.setSymptomsAndFactors(symptom, factor)}
          tileName={FactorNames[factor]}
          isSelected={
            this.props.symptomsAndFactors[symptom]?.includes(factor) === true
          }
        />
      </Grid>
    ));
  }

  render() {
    const symptomIndexParam = this.props.symptomIndexParams.symptomIndex;
    const symptomIndex = parseInt(symptomIndexParam);
    const sympKeys = Object.keys(this.props.symptomsAndFactors);
    const sympStr = sympKeys[symptomIndex] as Symptom;
    const symp = Symptom[sympStr];

    return (
      <div className="onboardContainer">
        <div className="top">
          <div>
            <div>
              <Typography variant="h3">
                Which of the following might be related to{" "}
                <b>{SymptomNames[symp]}</b>?
              </Typography>
              <Typography variant="h6">
                ({symptomIndex + 1}/{sympKeys.length})
              </Typography>
            </div>
            <Typography variant="h6">
              When you experience acid reflux, we will help you record what was
              happening. Then the app analyze this data to show you
              correlations.
            </Typography>
          </div>
          <div className="facTiles">
            <Grid container spacing={2}>
              {this.getFactorTiles(symp)}
            </Grid>
          </div>
        </div>
        <div className="submitBtn">
          <NextButton
            label="Done"
            path={
              sympKeys.length > symptomIndex + 1
                ? "/setFactors/" + (symptomIndex + 1)
                : "/main/entries"
            }
            onNext={() => {}}
          />
        </div>
      </div>
    );
  }
}

export default SetFactorsPage;
