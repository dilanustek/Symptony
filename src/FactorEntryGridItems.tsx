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
  setEntryFactorValue: (factor: Factor, value: string) => void;
}

function getFactorOptions(
  factor: Factor,
  setEntryFactorValue: (factor: Factor, value: string) => void
) {
  const values = FactorsAndValues[factor];

  return values.map((value) => (
    <Grid item xs>
      <Button onClick={() => setEntryFactorValue(factor, value)}>
        {value}
      </Button>
    </Grid>
  ));
}

function getFactorsAndOptions(
  symptom: Symptom,
  symptomsAndFactors: SymptomsAndFactors,
  setEntryFactorValue: (factor: Factor, value: string) => void
) {
  const factors = symptomsAndFactors[symptom];
  if (!factors) return null;

  return factors.map((factor) => (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h6">{factor}</Typography>
      </Grid>
      <Grid container justify="center">
        {getFactorOptions(factor, setEntryFactorValue)}
      </Grid>
    </Grid>
  ));
}

const FactorEntryGridItems = (props: Props) => {
  return (
    <Grid container>
      {getFactorsAndOptions(
        props.symptom,
        props.symptomsAndFactors,
        props.setEntryFactorValue
      )}
    </Grid>
  );
};

export default FactorEntryGridItems;
