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
  symptomsAndFactors: SymptomsAndFactors = {
    PAIN: [Factor.ACTIVITY, Factor.EXERCISE],
    VERTIGO: [Factor.SLEEP, Factor.MOOD],
  };

  state: State = {
    symptomsAndFactors: this.symptomsAndFactors,
    allEntries: [],
    selectedSymptom: Object.keys(this.symptomsAndFactors)[0] as Symptom,
  };

  // state: State = {
  //   symptomsAndFactors: {},
  //   allEntries: [],
  //   selectedSymptom: null,
  // };

  componentDidMount() {
    // uncomment to get out of development mode and the code below
    // this.props.history.push("/setSymptoms");

    //  for development
    this.props.history.push("/main/entries/");
  }

  toggleSymptom = (symptom: Symptom) => {
    this.setState((state) => {
      const symptomsAndFactors = { ...state.symptomsAndFactors };
      const factorList = symptomsAndFactors[symptom];
      let factorListCopy: Factor[] = [];

      if (!factorList) {
        symptomsAndFactors[symptom] = [];
        return {
          symptomsAndFactors,
        };
      } else {
        delete symptomsAndFactors[symptom];
        return {
          symptomsAndFactors,
        };
      }
    });
  };

  toggleFactor = (symptom: Symptom, factor: Factor) => {
    this.setState((state) => {
      const symptomsAndFactors = { ...state.symptomsAndFactors };
      const factorList = symptomsAndFactors[symptom];
      let factorListCopy: Factor[] = [];
      console.log("toggle factor setstate");
      if (factorList) {
        factorListCopy = [...factorList];
      }
      if (factorListCopy.includes(factor)) {
        const removedFactorList = factorListCopy?.filter(
          (fac) => fac !== factor
        );
        symptomsAndFactors[symptom] = removedFactorList;
      } else {
        symptomsAndFactors[symptom] = factorListCopy;
        factorListCopy.push(factor);
      }

      return {
        symptomsAndFactors,
      };
    });
  };

  createNewEntry = (newEntry: Entry) => {
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
      <div className="container">
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
                  toggleFactor={this.toggleFactor}
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
                    createNewEntry={this.createNewEntry}
                    setSelectedSymptom={this.setSelectedSymptom}
                    selectedSymptom={this.state.selectedSymptom}
                  />
                )
              }
            />
          </Switch>
          <Route
            path="/main"
            render={(props) => <NavBar history={props.history} />}
          />
        </div>
      </div>
    );
  }
}

const App = withRouter(({ history }) => <AppInner history={history} />);

export default App;
