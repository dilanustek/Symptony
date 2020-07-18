import React, { Component } from "react";
import {
  Entry,
  Symptom,
  SymptomsAndFactors,
  FactorEntry,
} from "./SymptomHelpers";
import { Typography } from "@material-ui/core";
import SelectedSymptomsDropdown from "./SelectedSymptomsDrowdown";
import Grid from "@material-ui/core/Grid";
import DateTimePicker from "./DateTimePicker";

interface State {
  timeStamp: Date;
  factorEntries: FactorEntry[];
}

interface Props {
  setNewEntry: (newEntry: Entry) => void;
  symptomsAndFactors: SymptomsAndFactors;
  selectedSymptom: Symptom | null;
  setSelectedSymptom: (symptom: Symptom) => void;
}

class NewEntry extends Component<Props, State> {
  state: State = {
    timeStamp: new Date(Date.now()),
    factorEntries: [],
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
        <Typography variant="h5">New Entry</Typography>
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
