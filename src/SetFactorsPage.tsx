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
import { styled } from "@material-ui/core/styles";

interface Props {
  toggleFactor: (symptom: Symptom, factor: Factor) => void;
  symptomsAndFactors: SymptomsAndFactors;
  symptomIndexParams: any;
  isOnboarding: boolean;
  setOnboardingFalse: () => void;
}

const BoldTypography = styled(Typography)({
  fontWeight: "bold",
  fontSize: "24px",
  textTransform: "lowercase",
  display: "inline",
});

class SetFactorsPage extends Component<Props, {}> {
  getFactorTiles(symptom: Symptom) {
    const factors = Object.values(Factor);

    return factors.map((factor) => (
      <Grid item xs={6} key={factor}>
        <TileButton
          key={factor}
          onClick={() => this.props.toggleFactor(symptom, factor)}
          tileName={FactorNames[factor]}
          isSelected={
            this.props.symptomsAndFactors[symptom]?.includes(factor) === true
          }
        />
      </Grid>
    ));
  }

  getNextPath(symptomIndex: number, sympKeys: string[]) {
    if (symptomIndex + 1 < sympKeys.length)
      return "/setFactors/" + (symptomIndex + 1);
    else if (!this.props.isOnboarding) return "/main/settings";
    else return "/main/entries";
  }

  render() {
    const symptomIndexParam = this.props.symptomIndexParams.symptomIndex;
    const symptomIndex = parseInt(symptomIndexParam);
    const sympKeys = Object.keys(this.props.symptomsAndFactors);
    const sympStr = sympKeys[symptomIndex] as Symptom;
    const symp = Symptom[sympStr];
    const symptomName = SymptomNames[symp];

    return (
      <div className="onboardContainer">
        <div className="top">
          <div>
            <div className="topTitle">
              <Typography variant="h3" component="span">
                Which of the following might be related to{" "}
                <BoldTypography variant="h3">{symptomName}</BoldTypography>?{" "}
              </Typography>
              <Typography variant="h6" component="span">
                ({symptomIndex + 1}/{sympKeys.length})
              </Typography>
            </div>
            <div className="bottomTitle">
              <Typography variant="h6">
                When you experience any {symptomName}, we will help you record
                what was happening. Then the app analyze this data to show you
                correlations.
              </Typography>
            </div>
          </div>
          <div className="facTiles">
            <Grid container spacing={2}>
              {this.getFactorTiles(symp)}
            </Grid>
          </div>
        </div>
        <div className="submitBtn">
          <NextButton
            label="Get Started"
            path={this.getNextPath(symptomIndex, sympKeys)}
            onClick={() => {
              if (symptomIndex + 1 === sympKeys.length)
                this.props.setOnboardingFalse();
            }}
          />
        </div>
      </div>
    );
  }
}

export default SetFactorsPage;
