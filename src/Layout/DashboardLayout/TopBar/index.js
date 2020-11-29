import {
  AppBar,
  Avatar,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import MenuIcon from "@material-ui/icons/Menu";

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
        <Avatar />
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
