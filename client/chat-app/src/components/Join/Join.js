import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Join.css'
export default function Join(){
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  //JSX
   return (
      <div className="formnOuterContainer">
        <div className="formInnerContainer">
          <h1 className="heading"> ANNONYMOUS! IM <span role="img" aria-label="emoji">❤️</span></h1>
          <p>Create a channel  or enter a channel if someone has shared you the channel name</p>
          <div>
            <input placeholder="Enter your Name Here" className="formInput" type="text"  onChange={(event) => setName(event.target.value)}/>
          </div>
          <div>
            <input placeholder="Enter Channel Name Here" className="formInput button-margin" type="text" onChange={(event) => setRoom(event.target.value)} />
          </div>
          <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
            <button className="button button-margin">Enter Channel Now!</button>
          </Link>
        </div>
      </div>
    );
}

