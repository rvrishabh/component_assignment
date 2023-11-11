import CustomButton from "./CustomButton";

export default {
  title: "Button",
  component: CustomButton,
  argTypes: {
    color: {
      options: ["primary", "secondary", "error", "info", "success", "warning"],
      control: { type: "radio" },
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
  },
};

export const NewButton = (args) => <CustomButton {...args} />;

NewButton.args = {
  children: "Custom button",
  loading: false,
  color: "primary",
  size: "large",
  variant: "contained",
};
