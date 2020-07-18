import React, { Component } from "react";
import {
  Entry,
  Symptom,
  SymptomsAndFactors,
  EntryFactorValue,
} from "./SymptomHelpers";
import { Typography } from "@material-ui/core";
import SelectedSymptomsDropdown from "./SelectedSymptomsDrowdown";
import Grid from "@material-ui/core/Grid";
import DateTimePicker from "./DateTimePicker";
import Divider from "@material-ui/core/Divider";
import { styled } from "@material-ui/core/styles";
import CloseButton from "./CloseButton";

interface State {
  timeStamp: Date;
  entryFactorValues: EntryFactorValue[];
}

interface Props {
  setNewEntry: (newEntry: Entry) => void;
  symptomsAndFactors: SymptomsAndFactors;
  selectedSymptom: Symptom | null;
  setSelectedSymptom: (symptom: Symptom) => void;
}

const TitleDivider = styled(Divider)(({ theme }) => ({
  marginTop: theme.spacing(1),
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

  render() {
    console.log("new entry page");
    return (
      <>
        <CloseButton />
        <Typography variant="h5">New Entry</Typography>
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
      </>
    );
  }
}

export default NewEntry;
