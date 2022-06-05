import React, { useState, useEffect } from "react";
import DateFnsUtils from "@date-io/luxon";
import { MuiPickersUtilsProvider, KeyboardTimePicker } from "@material-ui/pickers";

export const MyTimePicker = (props) => {
  const [selectedDate, setSelectedDate] = useState(props.value ?? null);

  const handleTimeChange = (date) => {
    // setSelectedDate(date ?? null);
    props.onAccept(date != null && date.invalid == null ? date : null);
  };

  useEffect(() => {
    setSelectedDate(props.value ?? null);
  }, [props.value]);

  let error = props.helperText !== "" && props.helperText !== null && props.helperText !== undefined;
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardTimePicker
        // onClick={() => setOpen(true)}
        // open={open}
        // onClose={() => setOpen(false)}
        error={error}
        inputVariant="outlined"
        style={{ width: "100%", margin: "1rem 0", ...props.style }}
        variant="outlined"
        // InputProps={{ readOnly: true }}
        ampm={false}
        placeholder={"HH:mm"}
        mask="__:__"
        label={props.label}
        helperText={props.helperText}
        value={selectedDate}
        onChange={handleTimeChange}
        onAccept={props.onAccept}
        KeyboardButtonProps={{
          "aria-label": "change time",
        }}
        cancelLabel={props.cancelLabel ? props.cancelLabel : "CANCEL"}
        okLabel={props.okLabel ? props.okLabel : "OK"}
      />
    </MuiPickersUtilsProvider>
  );
};
