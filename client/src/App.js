import Messanger from "./components/Messanger";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AccountProvider from "./components/context/AccountProvider";
function App() {
  const clientI = '769986847822-iha7rkv7qmbb2m48q8rr9fc9t0tve2at.apps.googleusercontent.com';
  return (
    <GoogleOAuthProvider clientId={clientI}>
      <AccountProvider>
        <Messanger/>
      </AccountProvider>
    </GoogleOAuthProvider>
  ); 
}

export default App;
