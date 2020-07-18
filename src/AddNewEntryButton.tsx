import React from "react";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { styled } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";

const AddButtonStyled = styled(Button)(({ theme }) => ({
  justifyContent: "start",
  textTransform: "capitalize",
  marginTop: theme.spacing(1),
  padding: theme.spacing(0),
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
}));

const AddButton = withRouter(({ history }) => (
  <AddButtonStyled
    color="primary"
    startIcon={<AddIcon />}
    onClick={() => {
      history.push("/newEntry");
    }}
  >
    Add new entry
  </AddButtonStyled>
));

export default AddButton;
