import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { useTranslation } from "react-i18next";
import { Chip, Switch, Grid, Avatar } from "@material-ui/core";
import { LanguageRounded } from "@material-ui/icons";
import TopBarWrapper, { AvatarWrapper } from "./styles";

const TopBar = ({ classes, handleDrawerToggle }) => {
  const { i18n } = useTranslation();
  const handleChangeLanguage = () => {
    i18n.changeLanguage(i18n.languages[0] === "de" ? "en" : "de");
  };
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
