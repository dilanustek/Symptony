import React, { Component } from "react";
import { Route, withRouter, RouteComponentProps } from "react-router-dom";
import { Switch } from "react-router-dom";
import SetSymptomsPage from "./SetSymptomsPage";
import SetFactorsPage from "./SetFactorsPage";
import { History } from "history";
import {
  SymptomsAndFactors,
  Factor,
  Symptom,
  Entry,
  fillFactorValueDictionary,
} from "./SymptomHelpers";
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
  isOnboarding: boolean;
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

  // allEntries: Entry[] = [
  //   {
  //     symptom: Symptom.PAIN,
  //     timestamp: new Date(2020, 7, 20, 11, 20, 0),
  //     entryFactorValues: [
  //       { factor: Factor.ACTIVITY, value: "Sitting" },
  //       { factor: Factor.EXERCISE, value: "No exercise" },
  //     ],
  //   },
  //   {
  //     symptom: Symptom.VERTIGO,
  //     timestamp: new Date(2020, 7, 20, 9, 14, 0),
  //     entryFactorValues: [
  //       { factor: Factor.SLEEP, value: "Not enough" },
  //       { factor: Factor.MOOD, value: "Stress" },
  //     ],
  //   },
  //   {
  //     symptom: Symptom.PAIN,
  //     timestamp: new Date(),
  //     entryFactorValues: [
  //       { factor: Factor.ACTIVITY, value: "Sitting" },
  //       { factor: Factor.EXERCISE, value: "No exercise" },
  //     ],
  //   },
  // ];

  // state: State = {
  //   symptomsAndFactors: this.symptomsAndFactors,
  //   allEntries: this.allEntries,
  //   selectedSymptom: Object.keys(this.symptomsAndFactors)[0] as Symptom,
  //   isOnboarding: false,
  // };

  state: State = {
    symptomsAndFactors: {},
    allEntries: [],
    selectedSymptom: null,
    isOnboarding: true,
  };

  componentDidMount() {
    // uncomment to get out of development mode and the code below
    this.props.history.push("/setSymptoms");

    //  for development
    // this.props.history.push("/main/analytics/");

    fillFactorValueDictionary();
  }

  setOnboardingFalse = () => {
    this.setState({ isOnboarding: false });
  };

  toggleSymptom = (symptom: Symptom) => {
    this.setState((state) => {
      const symptomsAndFactors = { ...state.symptomsAndFactors };
      const factorList = symptomsAndFactors[symptom];
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
          <div className="content">
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
                    isOnboarding={this.state.isOnboarding}
                    setOnboardingFalse={this.setOnboardingFalse}
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
                      allEntries={this.state.allEntries}
                      setSelectedSymptom={this.setSelectedSymptom}
                    />
                  )
                }
              />
              <Route
                path="/main/analytics"
                render={() =>
                  !this.state.selectedSymptom ? null : (
                    <AnalyticsPage
                      symptomsAndFactors={this.state.symptomsAndFactors}
                      selectedSymptom={this.state.selectedSymptom}
                      setSelectedSymptom={this.setSelectedSymptom}
                      allEntries={this.state.allEntries}
                    />
                  )
                }
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
          </div>
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
