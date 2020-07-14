import React, { Component } from "react";
import "./setSymptoms.css";
import { Symptom, SymptomsAndFactors, SymptomNames } from "./SymptomHelpers";
import SymptomTileButton from "./SymptomTileButton";
import NextButton from "./NextButton";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

interface Props {
  setSymptomsAndFactors: (sympFac: SymptomsAndFactors) => void;
  symptomsAndFactors: SymptomsAndFactors;
}

class SetSymptomsPage extends Component<Props, {}> {
  toggleSymptom = (newSymptom: Symptom) => {
    const symps = this.props.symptomsAndFactors;
    if (!symps[newSymptom]) {
      symps[newSymptom] = [];
    } else {
      delete symps[newSymptom];
    }
    this.props.setSymptomsAndFactors(symps);
  };

  getSymptomTiles() {
    const symptoms = Object.values(Symptom);

    return symptoms.map((symptom) => (
      <Grid item xs>
        <SymptomTileButton
          key={symptom}
          toggleSymptom={() => this.toggleSymptom(symptom)}
          symptom={symptom}
          symptomSelected={this.props.symptomsAndFactors[symptom] !== undefined}
        />
      </Grid>
    ));
  }

  // getSymptomTiles() {
  //   let sympTiles = [];
  //   const keys = Object.keys(SymptomNames);

  //   sympTiles = keys.map(key =>
  //   <Grid item xs>
  //     <SymptomTileButton
  //       key={SymptomNames[Symptom[key]]}
  //       toggleSymptom={this.toggleSymptom}
  //       symptomName={s}
  //       symptomSelected={
  //         this.props.symptomsAndFactors[SymptomNames[key]] !== undefined
  //       }
  //     />
  //   </Grid>
  //   );
  //   // {

  //   // } )

  //   // for (const key of keys) {
  //   //   const s: string = SymptomName[key];
  //   //   sympTiles.push(
  //   //     <Grid item xs>
  //   //       <SymptomTileButton
  //   //         key={s}
  //   //         addSymptom={this.addSymptom}
  //   //         symptomName={s}
  //   //         symptomSelected={
  //   //           SymtomName[this.props.symptomsAndFactors[s]] !== undefined
  //   //         }
  //   //       />
  //   //     </Grid>
  //   //   );
  //   // }

  //   return sympTiles;
  // }

  render() {
    return (
      <div className="onboardContainer">
        <Typography variant="h6">Customize (1/2)</Typography>
        <Typography variant="h3">
          Which symptoms do you want to track?
        </Typography>
        <div className="sympTiles">
          <Grid container spacing={2}>
            {this.getSymptomTiles()}
          </Grid>
        </div>
        <div className="submitBtn">
          <NextButton buttonText="Next" />
        </div>
      </div>
    );
  }
}

export default SetSymptomsPage;
