import React, { Component } from "react";
import {
  Entry,
  Symptom,
  SymptomsAndFactors,
  EntryFactorValue,
  Factor,
} from "./SymptomHelpers";
import { Typography, Button } from "@material-ui/core";
import SelectedSymptomsDropdown from "./SelectedSymptomsDrowdown";
import Grid from "@material-ui/core/Grid";
import DateTimePicker from "./DateTimePicker";
import Divider from "@material-ui/core/Divider";
import { styled } from "@material-ui/core/styles";
import CloseButton from "./CloseButton";
import EntrySaveButton from "./EntrySaveButton";
import FactorEntryGridItems from "./FactorEntryGridItems";

interface State {
  timeStamp: Date;
  entryFactorValues: EntryFactorValue[];
}

interface Props {
  setNewEntry: (newEntry: Entry) => void;
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
    timeStamp: new Date(Date.now()),
    entryFactorValues: [],
  };

  setTimeStamp = (timeStamp: Date | null) => {
    if (timeStamp) {
      this.setState({ timeStamp });
    }
  };

  saveEntry = () => {
    const entry: Entry = {
      symptom: this.props.selectedSymptom,
      timeStamp: this.state.timeStamp,
      entryFactorValues: this.state.entryFactorValues,
    };

    this.props.setNewEntry(entry);
  };

  setEntryFactorValue = (factor: Factor, value: string) => {
    const newEntryFactorValue = {
      factor,
      value,
    };
    const newEntryFactorValues = this.state.entryFactorValues;
    newEntryFactorValues.push(newEntryFactorValue);

    this.setState({ entryFactorValues: newEntryFactorValues });
  };

  render() {
    console.log("new entry page");
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
          timeStamp={this.state.timeStamp}
          setTimeStamp={this.setTimeStamp}
        />

        <FactorEntryGridItems
          symptomsAndFactors={this.props.symptomsAndFactors}
          symptom={this.props.selectedSymptom}
          setEntryFactorValue={this.setEntryFactorValue}
        />
      </>
    );
  }
}

export default NewEntry;
