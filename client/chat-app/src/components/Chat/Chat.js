import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";
import TextComponent from '../TextComponent/TextComponent';
//import ChatTextsComponent from '../ChatTextsComponent/ChatTextsComponent';
import ChatRoomInfoComponent from '../ChatRoomInfoComponent/ChatRoomInfoComponent';
import FormComponent from '../FormComponent/FormComponent';
import Messages from '../Messages/Messages';
import './Chat.css';

let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'https://project-chat-application.herokuapp.com/';
  
    useEffect(() => {
      const { name, room } = queryString.parse(location.search);
  
      socket = io(ENDPOINT);
  
      setRoom(room);
      setName(name)
  
      socket.emit('join', { name, room }, (error) => {
        if(error) {
          alert(error);
        }
      });
    }, [ENDPOINT, location.search]);
    
    useEffect(() => {
      socket.on('message', message => {
        setMessages(messages => [ ...messages, message ]);
      });
      
      socket.on("roomData", ({ users }) => {
        setUsers(users);
      });
  }, []);
  
    const sendMessage = (event) => {
      event.preventDefault();
  
      if(message) {
        socket.emit('sendMessage', message, () => setMessage(''));
      }
    }



    //jsx
    return (
        <div className="chatOuerContainer">
        <div className="chatInnerContainer">
         <ChatRoomInfoComponent room={room} />
         <Messages messages={messages} name={name} />
         <FormComponent message={message} setMessage={setMessage} sendMessage={sendMessage}/>
         </div>
         {<TextComponent users={users} />}
         </div>  
   
     );
 }


 export default Chat;
