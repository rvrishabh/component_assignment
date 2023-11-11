import { Button, CircularProgress } from "@mui/material";

export default function CustomButton({
  loading,
  color = "primary",
  size = "medium",
  children,
  ...props
}) {
  return (
    <Button
      variant={!props?.variant ? "contained" : props?.variant}
      size={size}
      color={color}
      disabled={loading}
      {...props}
    >
      {loading ? <CircularProgress sx={{ mx: 5 }} size={20} /> : children}
    </Button>
  );
}
