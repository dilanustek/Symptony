import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import { Switch } from "react-router-dom";
import SetSymptomsPage from "./SetSymptomsPage";
import { History } from "history";
import { SymptomAndFactors } from "./SymptomHelpers";
import "./App.css";

interface State {
  symptoms: SymptomAndFactors;
}

interface Props {
  history: History;
}

class AppInner extends Component<Props, State> {
  state: State = {
    symptoms: {},
  };

  componentDidMount() {
    this.props.history.push("/setSymptoms");
  }

  setSymptomsAndFactors = (symp: SymptomAndFactors) => {
    this.setState({
      symptoms: symp,
    });
  };

  render() {
    return (
      <div className="AppContainer">
        <Switch>
          <Route path="/home" render={() => <div>hello antoine</div>} />
          <Route
            path="/setSymptoms"
            render={() => (
              <SetSymptomsPage
                symptoms={this.state.symptoms}
                setSymptomsAndFactors={this.setSymptomsAndFactors}
              />
            )}
          />
          {/* <Route>path="/setFactors" render{}</Route>
          <Route>path="/viewEntries" render{}</Route>
          <Route>path="/newEntry" render{}</Route>
          <Route>path="/analytics" render{}</Route>
          <Route>path="/settings" render{}</Route> */}
        </Switch>
      </div>
    );
  }
}

const App = withRouter(({ history }) => <AppInner history={history} />);

export default App;
