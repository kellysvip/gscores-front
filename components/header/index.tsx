import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import CustomDrawer from "../menu";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#1E88E5",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Toolbar>
          <CustomDrawer></CustomDrawer>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              fontWeight: "bold",
              flexGrow: 1,
              color: "#FFF",
              textAlign: "center",
              letterSpacing: "1px",
            }}
          >
            G SCORES
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
