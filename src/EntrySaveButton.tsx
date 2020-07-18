import React from "react";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { styled } from "@material-ui/core/styles";

const SaveButtonRight = styled(Button)(({ theme }) => ({
  marginLeft: "auto",
}));

const EntrySaveButton = withRouter(({ history }) => (
  <SaveButtonRight
    variant="contained"
    color="primary"
    aria-label="save"
    onClick={() => {
      history.push("/main/entries");
    }}
  >
    Save
  </SaveButtonRight>
));

export default EntrySaveButton;
