import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

interface GenericRadioButtonProps {
  onChange: (value: string) => void;
  label: string;
  rd1label: string;
  rd2label: string;
  value: string;
  defaultValue: string; // New prop for default value
}

const GenericRadioButton: React.FC<GenericRadioButtonProps> = ({
  label,
  rd1label,
  rd2label,
  onChange,
  value,
  defaultValue, // New prop
}) => {
  const initialValue = value || defaultValue; // Use the defaultValue if value is falsy

  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">{label}</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        value={initialValue} // Set the initial value based on defaultValue
        name="radio-buttons-group"
        onChange={(e) => onChange(e.target.value)}
      >
        <FormControlLabel
          value={rd1label}
          control={<Radio />}
          label={rd1label}
        />
        <FormControlLabel
          value={rd2label}
          control={<Radio />}
          label={rd2label}
        />
      </RadioGroup>
    </FormControl>
  );
};

export default GenericRadioButton;
