import React, { Component } from "react";
import {
  Entry,
  Symptom,
  SymptomsAndFactors,
  EntryFactorValue,
  Factor,
} from "./SymptomHelpers";
import { Typography } from "@material-ui/core";
import SelectedSymptomsDropdown from "./SelectedSymptomsDrowdown";
import Grid from "@material-ui/core/Grid";
import DateTimePicker from "./DateTimePicker";
import Divider from "@material-ui/core/Divider";
import { styled } from "@material-ui/core/styles";
import CloseButton from "./CloseButton";
import EntrySaveButton from "./EntrySaveButton";
import FactorEntryGridItems from "./FactorEntryGridItems";

interface State {
  timestamp: Date;
  entryFactorValues: EntryFactorValue[];
}

interface Props {
  createNewEntry: (newEntry: Entry) => void;
  symptomsAndFactors: SymptomsAndFactors;
  selectedSymptom: Symptom;
  setSelectedSymptom: (symptom: Symptom) => void;
}

const TitleDivider = styled(Divider)(({ theme }) => ({
  marginTop: theme.spacing(1),
}));

const NewEntryTitle = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(0),
}));

const HeaderGrid = styled(Grid)(({ theme }) => ({
  height: theme.spacing(9),
  paddingTop: theme.spacing(3),
  paddingLeft: 0,
  paddingRight: 0,
}));

const LeftAlignedGrid = styled(Grid)({
  display: "flex",
  justifyContent: "flex-end",
});

class NewEntry extends Component<Props, State> {
  state: State = {
    timestamp: new Date(Date.now()),
    entryFactorValues: [],
  };

  setTimestamp = (timeStamp: Date | null) => {
    if (timeStamp) {
      this.setState({ timestamp: timeStamp });
    }
  };

  saveEntry = () => {
    const entry: Entry = {
      symptom: this.props.selectedSymptom,
      timestamp: this.state.timestamp,
      entryFactorValues: this.state.entryFactorValues,
    };

    this.props.createNewEntry(entry);
  };

  toggleEntryFactorValue = (factor: Factor, value: string) => {
    this.setState((state) => {
      const oldFactorValues = this.state.entryFactorValues;
      const otherEntryFactorValues = oldFactorValues.filter(
        (fv) => !(fv.factor === factor && fv.value === value)
      );

      if (otherEntryFactorValues.length === oldFactorValues.length) {
        otherEntryFactorValues.push({ factor, value });
      }
      return { entryFactorValues: otherEntryFactorValues };
    });
  };

  render() {
    return (
      <>
        <HeaderGrid container direction="row" alignItems="center">
          <Grid item xs={2}>
            <CloseButton />
          </Grid>
          <Grid item xs={6}>
            <NewEntryTitle variant="h5">New Entry</NewEntryTitle>
          </Grid>
          <LeftAlignedGrid item xs>
            <EntrySaveButton saveEntry={this.saveEntry} />
          </LeftAlignedGrid>
        </HeaderGrid>
        <TitleDivider variant="fullWidth" />

        <SelectedSymptomsDropdown
          symptomsAndFactors={this.props.symptomsAndFactors}
          selectedSymptom={this.props.selectedSymptom}
          setSelectedSymptom={this.props.setSelectedSymptom}
        />
        <DateTimePicker
          timeStamp={this.state.timestamp}
          setTimestamp={this.setTimestamp}
        />

        <FactorEntryGridItems
          symptomsAndFactors={this.props.symptomsAndFactors}
          symptom={this.props.selectedSymptom}
          entryFactorValues={this.state.entryFactorValues}
          toggleEntryFactorValue={this.toggleEntryFactorValue}
        />
      </>
    );
  }
}

export default NewEntry;
