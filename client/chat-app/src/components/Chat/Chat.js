import React from "react";
import TextComponent from '../TextComponent/TextComponent';
import ChatTextsComponent from '../ChatTextsComponent/ChatTextsComponent';
import ChatRoomInfoComponent from '../ChatRoomInfoComponent/ChatRoomInfoComponent';
import FormComponent from '../FormComponent/FormComponent';
import './Chat.css';

const Chat=()=>{
    
    return (
        <div className="chatOuerContainer">
        <div className="chatInnerContainer">
         <ChatRoomInfoComponent />
         <ChatTextsComponent />
         <TextComponent />
         <div> 
         </div>
         <FormComponent />
         </div>
         
         </div>
     );
 }


 export default Chat;
