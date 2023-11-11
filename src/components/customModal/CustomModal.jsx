import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
  Slide,
} from "@mui/material";
import React from "react";
import Draggable from "react-draggable";

const TransitionComponent = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export default function CustomModal({
  open,
  onClose,
  maxWidth = "md",
  borderRadius = "10px",
  title,
  actions,
  children,
}) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      TransitionComponent={TransitionComponent}
      keepMounted
      fullWidth
      maxWidth={maxWidth}
      sx={{ "& .MuiDialog-paper": { borderRadius: borderRadius } }}
      PaperComponent={PaperComponent}
    >
      <DialogTitle id="draggable-dialog-title">{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>{actions}</DialogActions>
    </Dialog>
  );
}
