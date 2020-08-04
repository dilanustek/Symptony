import React, { Component } from "react";
import { SymptomsAndFactors, Symptom, SymptomNames } from "./SymptomHelpers";
import LargeHeader from "./LargeHeader";
import { Typography, Box } from "@material-ui/core";
import EditButton from "./EditButton";
import { styled } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

interface Props {
  symptomsAndFactors: SymptomsAndFactors;
}

const RowBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const MyPaper = styled(Paper)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(2),
}));

class SettingsPage extends Component<Props, {}> {
  getSymptomItems() {
    const symptoms = Object.keys(this.props.symptomsAndFactors) as Symptom[];
    return symptoms.map((symptom) =>
      symptom !== (symptoms[symptoms.length - 1] as Symptom)
        ? SymptomNames[symptom] + ", "
        : SymptomNames[symptom]
    );
  }

  render() {
    return (
      <>
        <LargeHeader title="Settings" />
        <MyPaper elevation={1}>
          <RowBox className="row">
            <Typography> Symptoms you are tracking:</Typography>
            <EditButton path="/setSymptoms" />
          </RowBox>
          <Typography variant="body2">{this.getSymptomItems()}</Typography>
        </MyPaper>
      </>
    );
  }
}

export default SettingsPage;
