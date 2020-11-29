import {
  AppBar,
  Avatar,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { Home } from "@material-ui/icons";

const TopBar = ({ classes, handleDrawerToggle }) => {
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          Responsive Template
        </Typography>
        <IconButton>
          <Avatar />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
