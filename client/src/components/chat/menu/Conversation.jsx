
import { AccountContext } from '../../context/AccountProvider';
import { styled, Box, Typography } from "@mui/material";
import { setConversation } from '../../../service/api';

import { useContext, useState, useEffect } from 'react';
import { formatDate } from '../../../utils/common-utils';
import { getConversation } from '../../../service/api';
import { emptyProfilePicture } from '../../../constants/data';


const Component = styled(Box)`
    height: 50px;
    display: flex;
    padding: 13px 0;
    cursor: pointer;
`;

const Image = styled('img')({
    width: 74,
    height: 43,
    objectFit: 'cover',
    borderRadius: '50%',
    padding: '0 14px',
    marginTop: '-9px',
});

const Container = styled(Box)`
    display: flex;
`;
const Timestamp = styled(Typography)`
    font-size: 12px;
    margin-left: auto;
    color: #00000099;
    margin-right: 20px;
`;

const Text = styled(Typography)`
    display: block;
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
    line-height: 1;
`;
const Conversation = ({ user }) => {
    const url = user.picture || emptyProfilePicture;
    const { account } = useContext(AccountContext);
    const { setPerson, newMessageFlag } = useContext(AccountContext);
    const [message, setMessage] = useState({});

    useEffect(() => {
        const getConversationMessage = async () => {
            const data = await getConversation({ senderId: account.sub, receiverId: user.sub });
            setMessage({ text: data?.message, timestamp: data?.updatedAt });
        }
        getConversationMessage();
    }, [newMessageFlag]);

    const getUser = async () => {
        setPerson(user);
        await setConversation({ senderId: account.sub, receiverId: user.sub })
    }

   
    return (
        <Component onClick={() => getUser()}>
            <Box >
                <Image src={user.picture} alt="dp" />
            </Box>
            <Box style={{ width: '100%' }}>
                <Container>
                    <Typography>{user.name}</Typography>
                    {
                        message?.text &&
                        <Timestamp>{formatDate(message?.timestamp)}</Timestamp>
                    }
                </Container>
                <Box>
                    <Text>{message?.text?.includes('localhost') ? 'media' : message.text}</Text>
                </Box>
            </Box>
        </Component>
    )
}
export default Conversation;