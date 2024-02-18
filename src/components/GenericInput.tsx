import { Grid, Box, TextField, TextFieldVariants } from "@mui/material";
import React from "react";

interface GenericInputProps {
  id: string;
  label: string;
  variant: TextFieldVariants;
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
  errorMessage?: string; // Add errorMessage prop
}

const GenericInput: React.FC<GenericInputProps> = ({
  id,
  label,
  variant,
  value,
  onChange,
  error = false,
  errorMessage, // Add errorMessage prop
}) => {
  return (
    <Grid item xs={12}>
      <Box mb={2}>
        <TextField
          id={id}
          label={label}
          variant={variant}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          error={error}
          helperText={error ? errorMessage : undefined} // Display the error message when there's an error
        />
      </Box>
    </Grid>
  );
};

export default GenericInput;
