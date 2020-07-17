import React, { Component } from "react";
import { Entry, Symptom, SymptomsAndFactors } from "./SymptomHelpers";
import { Typography } from "@material-ui/core";
import SelectedSymptomsDropdown from "./SelectedSymptomsDrowdown";

interface Props {
  setNewEntry: (newEntry: Entry) => void;
  symptomsAndFactors: SymptomsAndFactors;
  selectedSymptom: Symptom | null;
  setSelectedSymptom: (symptom: Symptom) => void;
}

class NewEntry extends Component<Props, {}> {
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
      </>
    );
  }
}

export default NewEntry;
