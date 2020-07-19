import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import {
  Factor,
  SymptomsAndFactors,
  FactorsAndValues,
  Symptom,
} from "./SymptomHelpers";
import { Typography, Button } from "@material-ui/core";

interface Props {
  symptomsAndFactors: SymptomsAndFactors;
  symptom: Symptom;
}

function getFactorOptions(factor: Factor) {
  const values = FactorsAndValues[factor];

  return values.map((value) => (
    <Grid item xs>
      <Button>{value}</Button>
    </Grid>
  ));
}

function getFactorsAndOptions(
  symptom: Symptom,
  symptomsAndFactors: SymptomsAndFactors
) {
  const factors = symptomsAndFactors[symptom];
  if (!factors) return null;

  return factors.map((factor) => (
    <Grid container justify="center">
      {getFactorOptions(factor)}
    </Grid>
  ));
}

const FactorEntryGridItems = (props: Props) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h6">Factor 1</Typography>
      </Grid>
      {getFactorsAndOptions(props.symptom, props.symptomsAndFactors)}
    </Grid>
  );
};

export default FactorEntryGridItems;
