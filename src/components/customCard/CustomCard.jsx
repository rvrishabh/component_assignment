import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";

export default function CustomCard({
  head,
  subHead,
  content,
  footer,
  padding = "10px",
  margin,
  maxWidth = "500px",
  ...props
}) {
  return (
    <Card
      {...props}
      raised={props.raised ? true : false}
      sx={{ padding: padding, margin: margin, maxWidth: maxWidth }}
    >
      <CardHeader title={head} subheader={subHead} />
      <CardContent>
        <Typography variant="body2">{content}</Typography>
      </CardContent>
      <CardActions>{footer}</CardActions>
    </Card>
  );
}
