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

const LeftAlignedGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
}));

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
      timeStamp: this.state.timestamp,
      entryFactorValues: this.state.entryFactorValues,
    };

    this.props.createNewEntry(entry);
  };

  setEntryFactorValue = (factor: Factor, value: string) => {
    this.setState((state) => {
      return {
        entryFactorValues: [...state.entryFactorValues, { factor, value }],
      };
    });
  };

  render() {
    return (
      <>
        <Grid container direction="row" alignItems="center">
          <Grid item xs={2}>
            <CloseButton />
          </Grid>
          <Grid item xs={7}>
            <NewEntryTitle variant="h5">New Entry</NewEntryTitle>
          </Grid>
          <LeftAlignedGrid item xs>
            <EntrySaveButton saveEntry={this.saveEntry} />
          </LeftAlignedGrid>
        </Grid>
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
          setEntryFactorValue={this.setEntryFactorValue}
        />
      </>
    );
  }
}

export default NewEntry;
