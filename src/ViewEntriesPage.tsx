import React, { Component } from "react";
import { SymptomsAndFactors, Symptom } from "./SymptomHelpers";
import { Typography } from "@material-ui/core";
import { styled, StylesProvider } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import SelectedSymptomsDropdown from "./SelectedSymptomsDrowdown";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { createMuiTheme } from "@material-ui/core/styles";
import { start } from "repl";

interface State {
  selectedSymptom: Symptom;
}

interface Props {
  symptomsAndFactors: SymptomsAndFactors;
}

const TitleDivider = styled(Divider)(({ theme }) => ({
  marginTop: theme.spacing(1),
}));

const AddButton = styled(Button)(({ theme }) => ({
  justifyContent: "start",
  textTransform: "capitalize",
  marginTop: theme.spacing(1),
  padding: theme.spacing(0),
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
}));

class ViewEntriesPage extends Component<Props, State> {
  state: State = {
    selectedSymptom: Object.keys(this.props.symptomsAndFactors)[0] as Symptom,
  };

  setSelectedSymptom = (selectedSymptom: Symptom) => {
    this.setState({
      selectedSymptom,
    });
  };

  render() {
    return (
      <>
        <Typography variant="h5"> Symptom Entries</Typography>
        <TitleDivider variant="fullWidth" />
        <SelectedSymptomsDropdown
          symptomsAndFactors={this.props.symptomsAndFactors}
          setSelectedSymptom={this.setSelectedSymptom}
          selectedSymptom={this.state.selectedSymptom}
        />

        <AddButton color="primary" startIcon={<AddIcon />}>
          Add new entry
        </AddButton>
      </>
    );
  }
}

export default ViewEntriesPage;
