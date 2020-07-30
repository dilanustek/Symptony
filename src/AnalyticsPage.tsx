import React, { Component } from "react";
import { SymptomsAndFactors, Symptom, Entry } from "./SymptomHelpers";
import LargeHeader from "./LargeHeader";
import Paper from "@material-ui/core/Paper";
import SelectedSymptomsDropdown from "./SelectedSymptomsDrowdown";
import CommonFactors from "./CommonFactors";
import { styled } from "@material-ui/core/styles";

interface Props {
  symptomsAndFactors: SymptomsAndFactors;
  selectedSymptom: Symptom;
  setSelectedSymptom: (s: Symptom) => void;
  allEntries: Entry[];
}

const MyPaper = styled(Paper)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(2),
}));

class AnalyticsPage extends Component<Props, {}> {
  render() {
    return (
      <>
        <LargeHeader title="Insights" />
        <SelectedSymptomsDropdown
          symptomsAndFactors={this.props.symptomsAndFactors}
          selectedSymptom={this.props.selectedSymptom}
          setSelectedSymptom={this.props.setSelectedSymptom}
        />
        {/* Given a symptom, what are the most common occurrances? */}
        <MyPaper elevation={1}>
          <CommonFactors
            allEntries={this.props.allEntries}
            selectedSymptom={this.props.selectedSymptom}
          />
        </MyPaper>
        {/* Plot: frequency of symptom over time */}
        {/* Histogram: which time of day does symptom happen? */}
      </>
    );
  }
}

export default AnalyticsPage;
