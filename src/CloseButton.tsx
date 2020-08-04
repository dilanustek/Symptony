import React from "react";
import { withRouter } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { styled } from "@material-ui/core/styles";

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  padding: "0px",
}));

const CloseButton = withRouter(({ history }) => (
  <StyledIconButton
    aria-label="close"
    onClick={() => {
      history.push("/main/entries");
    }}
  >
    <CloseIcon />
  </StyledIconButton>
));

export default CloseButton;
