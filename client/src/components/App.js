import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Register from "./Register";
import Login from "./Login";
import Home from "./Home";

import ChatRoom from "./ChatRoom";
import LobbyPage from "./user/lobby";
import CreateLobby from "./user/createLobby";


export default function App() {
const { auth } = useContext(authContext);

  return (
    <div>
      <Router>
        <Routes>

          <Route path = "/" element={<Home/>} />
          <Route path ="/signup" element={<Register/>} />
        
          <Route path ="/login" element={<Login/>} />
          <Route path ="/lobby" element={<LobbyPage />} />
          <Route path ="/CreLobby" element={<CreateLobby />} />
          <Route path ="/chatroom" element={<ChatRoom />} />

        </Routes>
      </Router>

    </div> 
  );

}

