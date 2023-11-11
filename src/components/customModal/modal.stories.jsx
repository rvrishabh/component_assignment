import { Button, Typography } from "@mui/material";
import CustomModal from "./CustomModal";

export default {
  title: "Modal",
  component: CustomModal,
};

export const NewModal = (args) => <CustomModal {...args} />;

NewModal.args = {
  open: false,
  onClose: () => {},
  borderRadius: "10px",
  maxWidth: "sm",
  title: "New Modal",
  actions: <Button>Close</Button>,
  children: <Typography variant="h4">Hello World</Typography>,
};
