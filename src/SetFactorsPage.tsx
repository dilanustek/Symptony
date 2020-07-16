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
  setSymptomsAndFactors: (symptomsAndFactors: SymptomsAndFactors) => void;
  symptomsAndFactors: SymptomsAndFactors;
  match: any;
}

class SetFactorsPage extends Component<Props, {}> {
  toggleFactor = (currentFactor: Factor, symptom: Symptom) => {
    const symptomsAndFactors = this.props.symptomsAndFactors;
    const factorList = symptomsAndFactors[symptom];

    if (!factorList)
      return Error("Symptom is null while trying to add factors.");

    // if factor is there remove it
    if (factorList.includes(currentFactor)) {
      const removedFactorList = factorList.filter(
        (factor) => factor !== currentFactor
      );
      symptomsAndFactors[symptom] = removedFactorList;
    } else {
      factorList.push(currentFactor);
    }

    this.props.setSymptomsAndFactors(symptomsAndFactors);
  };

  getFactorTiles(symptom: Symptom) {
    const factors = Object.values(Factor);

    return factors.map((factor) => (
      <Grid item xs key={factor}>
        <TileButton
          key={factor}
          toggleSymptom={() => this.toggleFactor(factor, symptom)}
          tileName={FactorNames[factor]}
          isSelected={
            this.props.symptomsAndFactors[symptom]?.includes(factor) === true
          }
        />
      </Grid>
    ));
  }

  render() {
    const symptomIndexParam = this.props.match.params.symptomIndex;
    const symptomIndex = parseInt(symptomIndexParam);
    const sympKeys = Object.keys(this.props.symptomsAndFactors);
    const sympStr = sympKeys[symptomIndex] as Symptom;
    const symp = Symptom[sympStr];

    return (
      <div className="onboardContainer">
        <Typography variant="h3">
          Which of the following might be related to {SymptomNames[symp]} (
          {symptomIndex + 1}/{sympKeys.length})
        </Typography>
        <div className="facTiles">
          <Grid container spacing={2}>
            {this.getFactorTiles(symp)}
          </Grid>
        </div>
        <div className="submitBtn">
          <NextButton
            label="Next"
            path={
              sympKeys.length > symptomIndex + 1
                ? "/SetFactors/" + (symptomIndex + 1)
                : "/ViewEntries"
            }
          />
        </div>
      </div>
    );
  }
}

export default SetFactorsPage;
