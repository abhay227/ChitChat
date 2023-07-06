
import { Box,styled} from '@mui/material';
import { useContext,useState,useEffect,useRef } from 'react';
import { newMessages,getMessage } from '../../../service/api';
import { AccountContext } from '../../context/AccountProvider';
//components
import Message from './Message';
import Footer from './Footer';
const Wrapper = styled(Box)`
    background-image: url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
    background-size: 50%;
`;

const StyledFooter = styled(Box)`
    height: 55px;
    background: #ededed;
    // position: absolute;
    width: 100%;
    // bottom: 0
`;
    
const Component = styled(Box)`
    height: 75vh;
    overflow-y: scroll;
`;

const Container = styled(Box)`
    padding: 1px 80px;
`;
const Messages = ({person,conversation}) => {
    const [value,setValue] = useState("");
    const {account,socket,newMessageFlag,setNewMessageFlag} = useContext(AccountContext);
    const [messages,setMessages] = useState([]);
    const [file,setFile] = useState();
    const [image,setImage] = useState('');
    const scrolllRef = useRef();
    const [incomingMessage,setIncomingMessage] = useState(null);

    useEffect(() => {
      socket.current.on('getMessage',data=>{
        setIncomingMessage({
            ...data,
            createdAt: Date.now()
        })
      })
    }, [])
    
    useEffect(() => {
        const getMessageDetails = async () => {
            let data = await getMessage(conversation?._id);
            setMessages(data);
        }
        getMessageDetails();
    }, [conversation?._id, person._id, newMessageFlag]);
    useEffect(() => {
      scrolllRef.current?.scrollIntoView({transition: 'smooth'});
    }, [messages])
    useEffect(() => {
      incomingMessage && conversation?.members?.includes(incomingMessage.senderId) && setMessages(prev => [...prev,incomingMessage])
    }, [incomingMessage,conversation])
    

    const sendText = async (e) => {
        let code = e.keyCode || e.which;
        if(!value) return;

        if(code === 13) { 
            let message = {};
            if (!file) {
                message = {
                    senderId: account.sub,
                    receiverId: person.sub,
                    conversationId: conversation._id,
                    type: 'text',
                    text: value
                };
            } else {
                message = {
                    senderId: account.sub,
                    conversationId: conversation._id,
                    receiverId: person.sub,
                    type: 'file',
                    text: image
                };
            }
            socket.current.emit('sendMessage',message);
            await newMessages(message);
            setValue('');
            setFile();
            setImage('');
            setNewMessageFlag(prev => !prev);
        }
    }
  return (
    <Wrapper>
        <Component>
            {
                messages && messages.map(message=>(
                    <Container ref={scrolllRef}>
                    <Message message={message}/>
                    </Container>
                ))
            }
        </Component>
        <Footer 
            sendText={sendText}
            value={value}
            setValue={setValue}
            setFile={setFile}
            file={file}
            setImage={setImage}
        />
    </Wrapper>
  )
}

export default Messages;