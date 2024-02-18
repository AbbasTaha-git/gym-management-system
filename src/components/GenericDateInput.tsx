import React from "react";
import { Dayjs } from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Grid } from "@mui/material";

interface GenericDateInputProps {
  label: string;
  value: Dayjs | null; // Add value prop
  onChange: (newValue: Dayjs | null) => void; // Add onChange prop
}

const GenericDateInput: React.FC<GenericDateInputProps> = ({
  label,
  value,
  onChange,
}) => {
  return (
    <Grid item xs={12} sx={{ paddingTop: 2 }}>
      <DatePicker label={label} value={value} onChange={onChange} />
    </Grid>
  );
};

export default GenericDateInput;
