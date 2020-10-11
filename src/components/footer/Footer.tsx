import React from 'react';

import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import { footerUseStyles as useStyles } from './Footer.styles';
import { ExternalUrlLinks } from '../../util/link-constants';


const Footer = () => {
    const classes = useStyles();
    return (
        <Box className={classes.container}>
            <Link
                component="button"
                onClick={() => {
                    window.location.href = ExternalUrlLinks.GITHUB;
                }}
                className={classes.navLinks}
            >
                <GitHubIcon className={classes.icons} /> Github
            </Link>

            <Link
                component="button"
                onClick={() => {
                    window.location.href = ExternalUrlLinks.LINKEDIN;
                }}
                className={classes.navLinks}
            >
                <LinkedInIcon className={classes.icons} /> LinkedIn
            </Link>

            <Link
                component="button"
                onClick={() => {
                    window.location.href = ExternalUrlLinks.DEVPOST;
                }}
                className={classes.navLinks}
            >
                Devpost
            </Link>
        </Box>

    )
}

export { Footer }