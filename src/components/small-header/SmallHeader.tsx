import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import Box from '@material-ui/core/Box';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';

import { UrlLinks } from '../../util/link-constants';


const SmallHeader = () => {
    const history = useHistory();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const redirectUser = (url: UrlLinks) => {
        handleClose()
        history.push(url)
    }

    return (
        <Box flexGrow={1} textAlign="right">
            <MenuIcon component="button" aria-controls="open-menu" aria-haspopup="true" onClick={handleClick} />
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                
            >
                <MenuItem onClick={() => { redirectUser(UrlLinks.ABOUT) }}>About</MenuItem>
                <MenuItem onClick={() => { redirectUser(UrlLinks.PROJECTS) }}>Projects</MenuItem>
            </Menu>
        </Box>
    )
}

export { SmallHeader };