import React, { Component } from "react";
import { SymptomsAndFactors, Symptom } from "./SymptomHelpers";
import SelectedSymptomsDropdown from "./SelectedSymptomsDrowdown";
import AddNewEntryButton from "./AddNewEntryButton";
import LargeHeader from "./LargeHeader";

interface Props {
  symptomsAndFactors: SymptomsAndFactors;
  selectedSymptom: Symptom;
  setSelectedSymptom: (selectedSymptom: Symptom) => void;
}

class ViewEntriesPage extends Component<Props, {}> {
  render() {
    return (
      <>
        <LargeHeader title="Symptom entries" />
        <SelectedSymptomsDropdown
          symptomsAndFactors={this.props.symptomsAndFactors}
          setSelectedSymptom={this.props.setSelectedSymptom}
          selectedSymptom={this.props.selectedSymptom}
        />
        <AddNewEntryButton />
      </>
    );
  }
}

export default ViewEntriesPage;
