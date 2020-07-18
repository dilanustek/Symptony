import React from "react";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";

const EntrySaveButton = withRouter(({ history }) => (
  <Button
    variant="contained"
    color="primary"
    aria-label="save"
    onClick={() => {
      history.push("/main/entries");
    }}
  >
    Save
  </Button>
));

export default EntrySaveButton;
