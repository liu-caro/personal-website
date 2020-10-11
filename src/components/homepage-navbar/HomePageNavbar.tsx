import React, { Fragment } from 'react';
import { useHistory } from "react-router-dom";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import { homepageNavbarUseStyles as useStyles } from './HomePageNavbar.styles';
import { SmallHeader } from '../small-header/SmallHeader';
import { UrlLinks } from '../../util/link-constants';


const HomePageNavbar = () => {
    const classes = useStyles();
    const history = useHistory();

    const theme = useTheme();
    const smallScreenOrBigger = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <AppBar className={classes.container} color="default" elevation={0} position="static">
            <Toolbar disableGutters>
                <Link
                    component="button"
                    underline='none'
                    onClick={() => {
                        history.push(UrlLinks.HOME)
                    }}
                    className={classes.siteTitle}
                >
                    <Typography variant="h4">
                        {smallScreenOrBigger ? "Caroline Liu" : "Caroline"}
                    </Typography>
                </Link>

                {smallScreenOrBigger && (
                    <Fragment>
                        <Link
                            component="button"
                            underline='none'
                            onClick={() => {
                                history.push(UrlLinks.ABOUT)
                            }}

                            className={classes.aboutNavLink}
                        >
                            <Typography variant="h6">
                                About
                            </Typography>
                        </Link>

                        <Link
                            component="button"
                            underline='none'
                            onClick={() => {
                                history.push(UrlLinks.PROJECTS)
                            }}

                            className={classes.projectNavLink}
                        >
                            <Typography variant="h6">
                                Projects
                            </Typography>
                        </Link>
                    </Fragment>
                )}

                {!smallScreenOrBigger && (
                    <SmallHeader />
                )}

            </Toolbar>
        </AppBar>
    )
}

export { HomePageNavbar }