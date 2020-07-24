import React, { Component } from "react";
import { SymptomsAndFactors, Symptom, SymptomNames } from "./SymptomHelpers";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { styled } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";

interface Props {
  symptomsAndFactors: SymptomsAndFactors;
  setSelectedSymptom: (selectedSymptom: Symptom) => void;
  selectedSymptom: Symptom;
}

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  marginTop: theme.spacing(1),
  // minWidth: 120,
}));

const StyledSelectEmpty = styled(Select)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

class SelectedSymptomsDropdown extends Component<Props, {}> {
  getSymptomDropdownItems() {
    const symptoms = Object.keys(this.props.symptomsAndFactors) as Symptom[];
    return symptoms.map((symptom) => (
      <MenuItem key={symptom} value={symptom}>
        {SymptomNames[symptom]}
      </MenuItem>
    ));
  }

  render() {
    return (
      <StyledFormControl>
        <StyledSelectEmpty
          value={this.props.selectedSymptom}
          onChange={(event) =>
            this.props.setSelectedSymptom(event.target.value as Symptom)
          }
          inputProps={{ "aria-label": "Without label" }}
          defaultValue={Symptom.PAIN}
        >
          <MenuItem value="" disabled>
            View a symptom
          </MenuItem>
          {this.getSymptomDropdownItems()}
        </StyledSelectEmpty>
      </StyledFormControl>
    );
  }
}

export default SelectedSymptomsDropdown;
