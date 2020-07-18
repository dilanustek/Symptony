import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { styled } from "@material-ui/core/styles";

interface Props {
  timeStamp: Date;
  setTimeStamp: (timeStamp: Date | null) => void;
}

const WideKeyboardDatePicker = styled(KeyboardDatePicker)(({ theme }) => ({
  width: "100%",
}));

const WideKeyboardTimePicker = styled(KeyboardTimePicker)(({ theme }) => ({
  width: "100%",
}));

export default function DateTimePicker(props: Props) {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <WideKeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={props.timeStamp}
          onChange={props.setTimeStamp}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
        <WideKeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Time picker"
          value={props.timeStamp}
          onChange={props.setTimeStamp}
          KeyboardButtonProps={{
            "aria-label": "change time",
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
