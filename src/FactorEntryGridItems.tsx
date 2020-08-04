import React from "react";
import Grid from "@material-ui/core/Grid";
import {
  Factor,
  SymptomsAndFactors,
  FactorsAndValues,
  Symptom,
  EntryFactorValue,
} from "./SymptomHelpers";
import { Typography } from "@material-ui/core";
import TileButton from "./TileButton";

interface Props {
  symptomsAndFactors: SymptomsAndFactors;
  symptom: Symptom;
  entryFactorValues: EntryFactorValue[];
  setEntryFactorValue: (factor: Factor, value: string) => void;
}

function isEntryFactorValueSelected(
  entryFactorValues: EntryFactorValue[],
  selectedFactor: Factor,
  selectedValue: string
) {
  for (let factorValue of entryFactorValues) {
    if (
      factorValue.factor === selectedFactor &&
      factorValue.value === selectedValue
    ) {
      return true;
    }
  }
  return false;
}

function getFactorOptions(
  factor: Factor,
  entryFactorValues: EntryFactorValue[],
  setEntryFactorValue: (factor: Factor, value: string) => void
) {
  const values = FactorsAndValues[factor];

  return values.map((value) => (
    <Grid item xs key={factor + value}>
      <TileButton
        tileName={value}
        isSelected={isEntryFactorValueSelected(
          entryFactorValues,
          factor,
          value
        )}
        onClick={() => setEntryFactorValue(factor, value)}
      />
    </Grid>
  ));
}

function getFactorsAndOptions(
  symptom: Symptom,
  symptomsAndFactors: SymptomsAndFactors,
  entryFactorValues: EntryFactorValue[],
  setEntryFactorValue: (factor: Factor, value: string) => void
) {
  const factors = symptomsAndFactors[symptom];
  if (!factors) return null;

  return factors.map((factor) => (
    <Grid container key={factor}>
      <Grid item xs={12}>
        <Typography variant="h6">{factor}</Typography>
      </Grid>
      <Grid container justify="center">
        {getFactorOptions(factor, entryFactorValues, setEntryFactorValue)}
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
        props.entryFactorValues,
        props.setEntryFactorValue
      )}
    </Grid>
  );
};

export default FactorEntryGridItems;
