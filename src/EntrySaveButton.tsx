import React from "react";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";

interface Props {
  saveEntry: () => void;
}

const EntrySaveButton = (props: Props) => {
  return withRouter(({ history }) => (
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
};

export default EntrySaveButton;
