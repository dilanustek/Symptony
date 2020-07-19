import React from "react";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Entry } from "./SymptomHelpers";

interface Props {
  saveEntry: () => void;
}

const EntrySaveButton = (props: Props) => {
  const EntrySaveButtonRouter = withRouter(({ history }) => (
    <Button
      variant="contained"
      color="primary"
      aria-label="save"
      onClick={() => {
        props.saveEntry();
        history.push("/main/entries");
      }}
    >
      Save
    </Button>
  ));

  return <EntrySaveButtonRouter />;
};

export default EntrySaveButton;
