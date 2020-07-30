import React, { Component } from "react";
import { Symptom, Entry, SymptomNames } from "./SymptomHelpers";
import { Typography } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import { Scatter } from "react-chartjs-2";
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
  getScatterData() {
    const data = {
      datasets: [
        {
          backgroundColor: purple[400],
          pointRadius: 10,
          data: [
            {
              x: 1,
              y: 9,
            },
            {
              x: 1,
              y: 10,
            },
            {
              x: 1,
              y: 11,
            },
            {
              x: 4,
              y: 10,
            },
            {
              x: 10,
              y: 11,
            },
          ],
        },
      ],
    };

    return data;
  }

  render() {
    const options = {
      legend: {
        display: false,
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              display: false,
            },
            type: "linear",
            position: "bottom",
          },
        ],
        yAxes: [
          {
            gridLines: {
              display: false,
            },
          },
        ],
      },
    };

    return (
      <>
        <PaperTitles>When does it happen most in a day?</PaperTitles>
        <Scatter data={this.getScatterData()} options={options} />
      </>
    );
  }
}

export default TimeOfDayChart;
