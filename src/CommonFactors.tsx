import React, { Component } from "react";
import {
  Symptom,
  Entry,
  SymptomNames,
  idFactorValueMap,
  FactorNames,
} from "./SymptomHelpers";
import { Typography, ListItem, List, ListItemText } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

interface Props {
  allEntries: Entry[];
  selectedSymptom: Symptom;
}

const PaperTitles = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  fontWeight: "bold",
}));

class CommonFactors extends Component<Props, {}> {
  getMostCommonFactorValues() {
    let commonFVs = [];
    for (let i = 0; i < 5; i++) {
      // returning random insights for the purpose of the demo
      const randomId = Math.floor(Math.random() * (idFactorValueMap.size - 1));
      if (randomId < 0) return null;
      const randomIdStr = randomId.toString();
      const fv = idFactorValueMap.get(randomIdStr);
      if (!fv) return null;
      console.log(randomIdStr);

      commonFVs.push(
        <ListItem key={FactorNames[fv.factor] + " - " + fv.value}>
          <ListItemText
            primary={i + 1 + " - " + FactorNames[fv.factor] + " - " + fv.value}
          />
        </ListItem>
      );
    }
    return commonFVs;
  }

  render() {
    return (
      <>
        <PaperTitles>
          Most common factors for {SymptomNames[this.props.selectedSymptom]}
        </PaperTitles>
        <List>{this.getMostCommonFactorValues()}</List>
      </>
    );
  }
}

export default CommonFactors;
