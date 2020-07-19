import React, { Component } from "react";
import { Route, withRouter, RouteComponentProps } from "react-router-dom";
import { Switch } from "react-router-dom";
import SetSymptomsPage from "./SetSymptomsPage";
import SetFactorsPage from "./SetFactorsPage";
import { History } from "history";
import { SymptomsAndFactors, Factor, Symptom, Entry } from "./SymptomHelpers";
import "./App.css";
import ViewEntriesPage from "./ViewEntriesPage";
import AnalyticsPage from "./AnalyticsPage";
import SettingsPage from "./SettingsPage";
import NavBar from "./NavBar";
import NewEntry from "./NewEntry";

interface State {
  symptomsAndFactors: SymptomsAndFactors;
  allEntries: Entry[];
  selectedSymptom: Symptom | null;
}

interface Props {
  history: History;
}

class AppInner extends Component<Props, State> {
  // for development
  // symptomsAndFactors: SymptomsAndFactors = {
  //   PAIN: [Factor.ACTIVITY, Factor.EXERCISE],
  //   VERTIGO: [Factor.SLEEP, Factor.MOOD],
  // };

  // state: State = {
  //   symptomsAndFactors: this.symptomsAndFactors,
  //   allEntries: [],
  //   selectedSymptom: Object.keys(this.symptomsAndFactors)[0] as Symptom,
  // };

  state: State = {
    symptomsAndFactors: {},
    allEntries: [],
    selectedSymptom: null,
  };

  componentDidMount() {
    // uncomment to get out of development mode and the code below
    this.props.history.push("/setSymptoms");

    //  for development
    // this.props.history.push("/main/entries/");
  }

  toggleSymptom = (symptom: Symptom) => {
    const factorList = this.state.symptomsAndFactors[symptom];

    if (!factorList) {
      // symptom doesn't exist. Add it.
      this.setState((state) => {
        const symptomsAndFactors = state.symptomsAndFactors;
        symptomsAndFactors[symptom] = [];
        return {
          symptomsAndFactors,
        };
      });
    } else {
      // delete symptom
      this.setState((state) => {
        const symptomsAndFactors = state.symptomsAndFactors;
        delete symptomsAndFactors[symptom];
        return {
          symptomsAndFactors,
        };
      });
    }
  };

  toggleFactor = (symptom: Symptom, factor: Factor) => {
    const symptomsAndFactors = this.state.symptomsAndFactors;
    const factorList = symptomsAndFactors[symptom];

    if (!factorList)
      return Error("Symptom is null while trying to add factors.");

    // if factor is there remove it, otherwise add it.
    if (factorList.includes(factor)) {
      this.setState((state) => {
        const symptomsAndFactors = state.symptomsAndFactors;
        const factorList = symptomsAndFactors[symptom];
        const removedFactorList = factorList?.filter((fac) => fac !== factor);
        symptomsAndFactors[symptom] = removedFactorList;
        return {
          symptomsAndFactors,
        };
      });
    } else {
      this.setState((state) => {
        const symptomsAndFactors = state.symptomsAndFactors;
        const factorList = symptomsAndFactors[symptom];
        factorList?.push(factor);
        return {
          symptomsAndFactors,
        };
      });
    }

    this.setState({
      symptomsAndFactors,
    });
  };

  // setSymptomsAndFactors = (symptom: Symptom, factor?: Factor) => {
  //   const symptomsAndFactors = this.state.symptomsAndFactors;
  //   const factorList = symptomsAndFactors[symptom];

  //   if (!factor) {
  //     //toggle symptom
  //     if (!factorList) {
  //       // symptom doesn't exist. Add it.
  //       symptomsAndFactors[symptom] = [];
  //     } else {
  //       delete symptomsAndFactors[symptom];
  //     }
  //   } else {
  //     // toggle factor
  //     if (!factorList)
  //       return Error("Symptom is null while trying to add factors.");

  //     // if factor is there remove it, otherwise add it.
  //     if (factorList.includes(factor)) {
  //       const removedFactorList = factorList.filter((fac) => fac !== factor);
  //       symptomsAndFactors[symptom] = removedFactorList;
  //     } else {
  //       factorList.push(factor);
  //     }
  //   }

  //   this.setState({
  //     symptomsAndFactors,
  //   });
  // };

  setNewEntry = (newEntry: Entry) => {
    this.setState((state) => {
      return { allEntries: [...state.allEntries, newEntry] };
    });
  };

  setSelectedSymptom = (selectedSymptom: Symptom) => {
    this.setState({
      selectedSymptom,
    });
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            path="/setSymptoms"
            render={() => (
              <SetSymptomsPage
                symptomsAndFactors={this.state.symptomsAndFactors}
                toggleSymptom={this.toggleSymptom}
                setSelectedSymptom={this.setSelectedSymptom}
              />
            )}
          />
          <Route
            exact
            path="/setFactors/:symptomIndex"
            render={(props: RouteComponentProps) => (
              <SetFactorsPage
                symptomsAndFactors={this.state.symptomsAndFactors}
                toggleFactors={this.toggleFactor}
                symptomIndexParams={props.match.params}
              />
            )}
          />
          <Route
            path="/main/entries"
            render={() =>
              !this.state.selectedSymptom ? null : (
                <ViewEntriesPage
                  symptomsAndFactors={this.state.symptomsAndFactors}
                  selectedSymptom={this.state.selectedSymptom}
                  setSelectedSymptom={this.setSelectedSymptom}
                />
              )
            }
          />
          <Route
            path="/main/analytics"
            render={() => (
              <AnalyticsPage
                symptomsAndFactors={this.state.symptomsAndFactors}
              />
            )}
          />
          <Route
            path="/main/settings"
            render={() => (
              <SettingsPage
                symptomsAndFactors={this.state.symptomsAndFactors}
              />
            )}
          />
          <Route
            path="/newEntry"
            render={() =>
              !this.state.selectedSymptom ? null : (
                <NewEntry
                  symptomsAndFactors={this.state.symptomsAndFactors}
                  setNewEntry={this.setNewEntry}
                  setSelectedSymptom={this.setSelectedSymptom}
                  selectedSymptom={this.state.selectedSymptom}
                />
              )
            }
          />
        </Switch>
        <Route
          path="/main"
          render={(props) => {
            if (!this.state.selectedSymptom) {
              this.setState((state) => {
                const firstSymptom = Object.keys(
                  state.symptomsAndFactors
                )[0] as Symptom;

                return { selectedSymptom: firstSymptom };
              });
            }
            return <NavBar history={props.history} />;
          }}
        />
      </div>
    );
  }
}

const App = withRouter(({ history }) => <AppInner history={history} />);

export default App;
