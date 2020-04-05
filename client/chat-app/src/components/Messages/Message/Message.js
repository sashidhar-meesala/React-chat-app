import React from 'react';

import './Message.css';
import userx from './max-bender-qUsHZwZHlgU-unsplash.jpg';
import usery from './tom-roberts-Xbx4h70MIcU-unsplash.jpg';

import ReactEmoji from 'react-emoji';

const Message = ({ message: { text, user }, name }) => {
  let isThisTextByCurrentuser = false;
  const trimmedName = name.trim().toLowerCase();

  if(user === trimmedName) {
    isThisTextByCurrentuser = true;
  }

  return (
      //if text is sent by current user then - follow css rules
    isThisTextByCurrentuser
      ? (
        <div className="Container justifyEnd">
          <p className="sentText pr-10">{trimmedName}</p>
          <div className="messageBox backgroundBlue">
            <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
          </div>
        </div>
        )
        //if it is sent by other person
        : (
          <div className="Container justifyStart">
            <div className="messageBox backgroundLight">
              <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
            </div>
            <p className="sentText pl-10 ">{user}</p>
            
          </div>
        )
  );
}

export default Message;