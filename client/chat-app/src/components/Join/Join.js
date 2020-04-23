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
          <h1 className="heading"> ANNONYMOUS!</h1>
          <p>Create a channel by yourself or enter a room if someone has shared you the channel name</p>
          <div>
            <input placeholder="Name" className="formInput" type="text"  onChange={(event) => setName(event.target.value)}/>
          </div>
          <div>
            <input placeholder="Room" className="formInput button-margin" type="text" onChange={(event) => setRoom(event.target.value)} />
          </div>
          <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
            <button className="button button-margin">Enter Room</button>
          </Link>
        </div>
      </div>
    );
}

