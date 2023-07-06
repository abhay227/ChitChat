import React from 'react'
import { Box, styled } from '@mui/material';
import { Chat as MessageIcon} from '@mui/icons-material';
import { useContext } from 'react';
import { AccountContext } from '../../context/AccountProvider';
import HeaderMenu from './HeaderMenu';
import InfoDrawer from '../../drawer/InfoDrawer';
import { useState } from 'react';

const Image = styled('img') ({
    height: 45,
    width: 55,
    borderRadius: '50%'
})

const Component = styled(Box)`
    height: 60px;
    background: #ededed;
    display: flex;
    padding: 8px 16px;
    align-items: center;
`
const Wrapper = styled(Box) `
    margin-left: auto;
    & > * {
        font-size: 45px;
        margin-left: 2px;
        padding: 8px;
        color: #000;
    };
    & :first-child {
        margin-right: 8px;
        margin-top: 3px;
    }
`;
const Header = () => {

    const [openDrawer,setOpenDrawer] = useState(false);
    const {account} = useContext(AccountContext);

    const toggleDrawer = ()=>{
        setOpenDrawer(true);
    }
    return (
        <>
            <Component>
                 <Image src={account.picture} alt = 'dp' onClick={()=>toggleDrawer()}/>
                <Wrapper>
                    <MessageIcon/>
                    <HeaderMenu />
                </Wrapper>
            </Component>
            <InfoDrawer open ={openDrawer} setOpen = {setOpenDrawer}/>
        </>
    )
}

export default Header