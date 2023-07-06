
import Login from "./account/Login";
import ChatDialog from "./chat/ChatDialog";
import { useContext } from "react";
import { AccountContext } from "./context/AccountProvider";
import { AppBar, Toolbar, styled, Box } from "@mui/material";

const Component = styled(Box)`
    height: 100vh;
    background: #DCDCDC;
`

const Header = styled(AppBar)`
    background-color: #00A884;
    height: 125px;
    box-shadow: none;
`;

const LoginHeader = styled(AppBar)`
    background: #00bfa5;
    height: 200px;
    box-shadow: none;
`;
const Messanger = () => {
  const { account } = useContext(AccountContext);
  return (
    <Component>
      {
        account ?
          <>
            <Header>
              <Toolbar></Toolbar>
            </Header>
            <ChatDialog />
          </>
          :
          <>
            <LoginHeader>
              <Toolbar></Toolbar>
            </LoginHeader>
            <Login />
          </>
      }
    </Component>
  )
}

export default Messanger;