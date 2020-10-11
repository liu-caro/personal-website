import React, { Fragment } from 'react';

import Divider from '@material-ui/core/Divider';

import { navbarUseStyles as useStyles } from './Navbar.styles';
import { HomePageNavbar } from '../homepage-navbar/HomePageNavbar';


const Navbar = () => {
    const classes = useStyles();
    return (
        <Fragment>
            <HomePageNavbar />
            <Divider className={classes.topDivider} />
        </Fragment>

    )
}

export { Navbar }