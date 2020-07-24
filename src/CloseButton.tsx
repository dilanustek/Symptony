import React from "react";
import { withRouter } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const CloseButton = withRouter(({ history }) => (
  <IconButton
    aria-label="close"
    onClick={() => {
      history.push("/main/entries");
    }}
  >
    <CloseIcon />
  </IconButton>
));

export default CloseButton;
