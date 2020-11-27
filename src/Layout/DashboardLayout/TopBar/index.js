import { AppBar, Box, IconButton, Toolbar, Typography } from '@material-ui/core';
import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import { useTranslation } from "react-i18next";
import { Chip, Switch, Grid } from "@material-ui/core";
import { LanguageRounded } from "@material-ui/icons";

const TopBar = ({ classes, handleDrawerToggle }) => {
    const { i18n } = useTranslation()
    const handleChangeLanguage = () => {
        i18n.changeLanguage(i18n.languages[0] === "de" ? "en" : "de");
    }
    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <Grid spacing={2} container className={classes.root} >
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Grid >
                        <Grid>
                            <Typography variant="h6" noWrap>
                                Responsive Template
                            </Typography>
                        </Grid>

                        <Grid>
                            <Switch
                                variant="outlined"
                                onClick={handleChangeLanguage}
                            ></Switch>
                            <Chip icon={<LanguageRounded />} label={`${i18n.languages[0].toUpperCase()}`} color="secondary" variant="outlined" />
                        </Grid>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default TopBar;