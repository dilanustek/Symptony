import React, { Component } from "react";
import { SymptomsAndFactors, Symptom } from "./SymptomHelpers";
import { Typography } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import SelectedSymptomsDropdown from "./SelectedSymptomsDrowdown";

interface State {
  selectedSymptom: Symptom;
}

interface Props {
  symptomsAndFactors: SymptomsAndFactors;
}

const TitleDivider = styled(Divider)(({ theme }) => ({
  marginTop: theme.spacing(1),
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
      </>
    );
  }
}

export default ViewEntriesPage;
