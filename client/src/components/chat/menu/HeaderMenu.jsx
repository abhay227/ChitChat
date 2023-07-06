import React from 'react'
import { useState } from 'react';
import { Menu, MenuItem, styled } from '@mui/material';
import { MoreVert } from '@mui/icons-material';

const MenuOption = styled(MenuItem)`
    font-size: 14px
    padding: 15px 60px 5px 24px;
    color: #4A4A4A;
`;

const HeaderMenu = () => {
    const [open, setOpen] = useState(false);
    //  const [openDrawer, setOpenDrawer] = useState(false);

    // const { setAccount, setShowloginButton, showlogoutButton, setShowlogoutButton } = useContext(AccountContext);
    // const { setPerson } = useContext(UserContext);


    const handleClick = (event) => {
        setOpen(event.currentTarget);
    };

    const handleClose = () => {
        setOpen(null);
    };
    return (
        <>

            <MoreVert onClick={handleClick} fontSize='large'/>
            <Menu
                anchorEl={open}
                keepMounted
                open={open}
                onClose={handleClose}
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuOption onClick={handleClose}>Profile</MenuOption>
                <MenuOption onClick={handleClose}>My Account</MenuOption>
                <MenuOption onClick={handleClose}>Logout</MenuOption>
            </Menu>

        </>
    )
}

export default HeaderMenu