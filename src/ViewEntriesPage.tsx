import React, { Component } from "react";
import { SymptomsAndFactors, Symptom } from "./SymptomHelpers";
import { Typography } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import SelectedSymptomsDropdown from "./SelectedSymptomsDrowdown";
import AddNewEntryButton from "./AddNewEntryButton";

interface Props {
  symptomsAndFactors: SymptomsAndFactors;
  selectedSymptom: Symptom;
  setSelectedSymptom: (selectedSymptom: Symptom) => void;
}

const TitleDivider = styled(Divider)(({ theme }) => ({
  marginTop: theme.spacing(1),
}));

class ViewEntriesPage extends Component<Props, {}> {
  render() {
    return (
      <>
        <Typography variant="h5"> Symptom entries</Typography>
        <TitleDivider variant="fullWidth" />
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
