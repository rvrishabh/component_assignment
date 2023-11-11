import { Button } from "@mui/material";
import CustomCard from "./CustomCard";

export default {
  title: "Card",
  component: CustomCard,
};

export const NewCard = (args) => <CustomCard {...args} />;

NewCard.args = {
  head: "New Card",
  subHead: "Sub head",
  content: "Content",
  raised: true,
  maxWidth: "500px",
  padding: "20px",
  margin: "20px",
  footer: (
    <>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </>
  ),
};
