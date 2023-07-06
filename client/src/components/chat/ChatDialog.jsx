import React from 'react'
import {Dialog,styled, Box} from '@mui/material'
import EmptyChat from './chat/EmptyChat';
import Menu from './menu/Menu';
import ChatBox from './chat/ChatBox';
import { useContext } from 'react';
import { AccountContext } from '../context/AccountProvider';

const Component = styled(Box)`
    display: flex;
`;
    
const LeftComponent = styled(Box)`
    min-width: 450px;
`;
    
const RightComponent = styled(Box)`
    width: 73%;
    min-width: 300px;
    height: 100%;
    border-left: 1px solid rgba(0, 0, 0, 0.14);
`;
const dialogStyle = {
    height: '100%',
    width: '100%',
    margin: '20px',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: 0,
    boxShadow: 'none',
    overflow: 'hidden'
};
const ChatDialog = () => {
    const {person} = useContext(AccountContext);
  return (
        <Dialog
            open = {true}
            PaperProps = {{sx:dialogStyle}}
            hideBackdrop={true}
        >
            <Component>
                <LeftComponent>
                    <Menu/>
                </LeftComponent>
                <RightComponent>
                    { Object.keys(person).length? <ChatBox /> : <EmptyChat />} 
                </RightComponent>
            </Component>

        </Dialog>
  )
}

export default ChatDialog;