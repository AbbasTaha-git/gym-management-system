import { Button, Grid } from "@mui/material";

interface GenericSubmitButtonProps {
  variant: "text" | "outlined" | "contained";
  onClick: () => void; // Add onClick prop
  color:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  text: string;
}

const GenericButton: React.FC<GenericSubmitButtonProps> = ({
  variant,
  color,
  text,
  onClick,
}) => {
  return (
    <Grid item xs={12}>
      <Button variant={variant} color={color} onClick={onClick}>
        {text}
      </Button>
    </Grid>
  );
};

export default GenericButton;
