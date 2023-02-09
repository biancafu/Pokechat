import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Chatbox(props) {
  // const { roomId } = props.match.params; // Gets roomId from URL
  // const { messages, sendMessage } = useChat(roomId); // Creates a websocket and manages messaging
  const [newMessage, setNewMessage] = useState(""); // Message to be sent

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  // const handleSendMessage = () => {
  //   sendMessage(newMessage);
  //   setNewMessage("");
  // };

  const chatboxstyle = { listStyle: "none" };
  const [messages, setMessages] = useState([
    "123",
    "abc",
    "ASssssssssaaabsxxxxaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    "sdas",
    "asa",
    "1234",
    "1234",
    "1234",
    "1234",
    "1234",
    "sdfsdf",
    "sdfsfs",
    "2131",
    "2131",
    "2131",
    "2131",
    "2131"
  ]);
  const listOfMessages = messages.map((msg, i) => {
    return (
      <li style={chatboxstyle} key={i}>
        <TextStyle>{msg}</TextStyle>
      </li>
    );
  });
  return (
    <div>
      <ChatboxStyle>
        <ul>{listOfMessages}</ul>
      </ChatboxStyle>
      <MessageInput>
        <div className="message-box">
          <input
            type="text"
            value={newMessage}
            onChange={handleNewMessageChange}
            placeholder="Write message..."
            className="new-message-input"
          />
          <button
          // onClick={handleSendMessage} className="send-message-button"
          >
            Send
          </button>
        </div>
      </MessageInput>
    </div>
  );
}

const TextStyle = styled.div`
  liststyle: "none";
  width: 100%;
  word-break: break-all;
`;

const ChatboxStyle = styled.div`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  overflow: auto;
  max-height: 28vh;
  margin-bottom: 50px;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const MessageInput = styled.div`
  background: rgba(255, 255, 255, 0.87);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.5px);
  -webkit-backdrop-filter: blur(5.5px);
  border: 1px solid rgba(255, 255, 255, 1);

  width: 100%;
  position: absolute;
  opacity: 0.85;
  bottom: 0;
  margin-top: 50px;
  display: flex;
  /* overflow: hidden; */
`;
