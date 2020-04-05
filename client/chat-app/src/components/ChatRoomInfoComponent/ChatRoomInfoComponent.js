import React from 'react';
import './ChatRoomInfoComponent.css';
import iconOnline from './icons8-online-50.png';
import iconClose from './icons8-close-window-50.png';

const ChatRoomInfoComponent=({ room })=>{
    return(
        <div className="roomInfo">
    <div className="left">
      <img className="onlineIcon" src={iconOnline} alt="online icon" />
      <h3>{room}</h3>
    </div>
    <div className="right">
      <a href="/"><img src={iconClose} alt="close icon" /></a>
    </div>
  </div>
    )
        

    
}

export default ChatRoomInfoComponent;