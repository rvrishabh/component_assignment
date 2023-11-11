import { Box, Button, Switch, Typography } from "@mui/material";
import { useState } from "react";
import CustomButton from "./components/customButton/CustomButton";
import CustomCard from "./components/customCard/CustomCard";
import CustomModal from "./components/customModal/CustomModal";
import MuiThemeProvider from "./theme/muiThemeProvider";

function App() {
  const [toggleDark, settoggleDark] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <MuiThemeProvider mode={toggleDark}>
      <Box>
        <Typography variant="h1">Hello World</Typography>
        <Switch onClick={() => settoggleDark(!toggleDark)}></Switch>
        <CustomButton onClick={() => setOpen(true)} loading={false}>
          Custom buttom
        </CustomButton>
        <Box display="block">
          <CustomCard
            maxWidth="500px"
            head="Title"
            content="Content"
            margin="20px"
            footer={
              <>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </>
            }
          />
        </Box>
        <CustomModal
          open={open}
          onClose={() => setOpen(false)}
          actions={<Button onClick={() => setOpen(false)}>Close</Button>}
        >
          <Typography variant="h4">Hello World</Typography>
        </CustomModal>
      </Box>
    </MuiThemeProvider>
  );
}

export default App;
