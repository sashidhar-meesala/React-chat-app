import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";
import TextComponent from '../TextComponent/TextComponent';
import ChatTextsComponent from '../ChatTextsComponent/ChatTextsComponent';
import ChatRoomInfoComponent from '../ChatRoomInfoComponent/ChatRoomInfoComponent';
import FormComponent from '../FormComponent/FormComponent';
import './Chat.css';

let socket;


const Chat=({ location })=>{

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const host='localhost:5000';
    //useeffects
    useEffect(()=>{
        const { name,room }=queryString.parse(location.search);
        //console.log(name,room);
        socket=io(host);




        setName(name);
        setRoom(room);
        socket.emit('join',{ name, room });
        //console.log(socket);
    },[host,location.search]);



    //jsx
    return (
        <div className="chatOuerContainer">
        <div className="chatInnerContainer">
         <ChatRoomInfoComponent />
         <ChatTextsComponent />
         <FormComponent />
         </div>
         {/*<TextComponent />*/}
         </div>  
   
     );
 }


 export default Chat;
