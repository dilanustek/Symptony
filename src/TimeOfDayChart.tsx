import React, { Component } from "react";
import { Symptom, Entry, SymptomNames } from "./SymptomHelpers";
import { Typography } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import { Bar } from "react-chartjs-2";
import { purple } from "@material-ui/core/colors/";

interface Props {
  symptomEntries: Entry[];
  selectedSymptom: Symptom;
}

const PaperTitles = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  fontWeight: "bold",
}));

class TimeOfDayChart extends Component<Props, {}> {
  getBarData() {
    const data = {
      datasets: [
        {
          label: "Morning",
          data: 14,
        },
        {
          label: "Afternoon",
          data: 2,
        },
        {
          label: "Evening/Night",
          data: 0,
        },
      ],
    };

    return data;
  }

  render() {
    const options = {};

    return (
      <>
        <PaperTitles>When does it happen most in a day?</PaperTitles>
        <Bar data={this.getBarData()} options={options} />
      </>
    );
  }
}

export default TimeOfDayChart;
