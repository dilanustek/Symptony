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
import SmallTileButton from "./SmallTileButton";
import { styled } from "@material-ui/core/styles";

interface Props {
  symptomsAndFactors: SymptomsAndFactors;
  symptom: Symptom;
  entryFactorValues: EntryFactorValue[];
  toggleEntryFactorValue: (factor: Factor, value: string) => void;
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

function getFactorOptions(factor: Factor, props: Props) {
  const values = FactorsAndValues[factor];

  return values.map((value) => (
    <Grid item xs key={factor + value}>
      <SmallTileButton
        tileName={value}
        isSelected={isEntryFactorValueSelected(
          props.entryFactorValues,
          factor,
          value
        )}
        onClick={() => props.toggleEntryFactorValue(factor, value)}
      />
    </Grid>
  ));
}

const GridPadding = styled(Grid)(({ theme }) => ({
  paddingTop: theme.spacing(3),
}));

const TypographyPadding = styled(Typography)(({ theme }) => ({
  paddingBottom: theme.spacing(2),
}));

function getFactorsAndOptions(props: Props) {
  const factors = props.symptomsAndFactors[props.symptom];
  if (!factors) return null;

  return factors.map((factor) => (
    <GridPadding container key={factor}>
      <Grid item xs={12}>
        <TypographyPadding variant="h6">{factor}</TypographyPadding>
      </Grid>
      <Grid container justify="center" spacing={2}>
        {getFactorOptions(factor, props)}
      </Grid>
    </GridPadding>
  ));
}

const FactorEntryGridItems = (props: Props) => {
  return <Grid container>{getFactorsAndOptions(props)}</Grid>;
};

export default FactorEntryGridItems;
