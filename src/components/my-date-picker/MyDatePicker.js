import React, { useState, useEffect } from "react";
import DateFnsUtils from "@date-io/luxon";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import { lngs } from "../../Constant";

export const MyDatePicker = (props) => {
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(props.value ?? null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    setSelectedDate(props.value ?? null);
  }, [props.value]);

  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={props.locale ? props.locale : lngs.sv.code}>
        <KeyboardDatePicker
          InputProps={{ readOnly: true }}
          className={props.className}
          onClick={() => setOpen(true)}
          autoOk={true}
          open={open}
          onClose={() => setOpen(false)}
          error={props.error}
          inputVariant="outlined"
          helperText={props.helperText}
          placeholder={props.placeholder ? props.placeholder : "ÅÅÅÅ-MM-DD"}
          format="yyyy-MM-dd"
          style={{ width: "100%", margin: "1rem 0", ...props.style }}
          disableToolbar
          clearable={props.clearable}
          maxDate={props.maxDate}
          minDate={props.minDate}
          variant="outlined"
          margin="normal"
          label={props.label}
          size={props.size ? props.size : "medium"}
          value={selectedDate}
          onChange={handleDateChange}
          onAccept={props.onAccept}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
          cancelLabel={props.cancelLabel ? props.cancelLabel : "Avbryt"}
          okLabel={props.okLabel ? props.okLabel : "OK"}
        />
      </MuiPickersUtilsProvider>
    </>
  );
};
