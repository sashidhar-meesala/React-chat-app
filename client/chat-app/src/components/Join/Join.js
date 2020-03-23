import React from 'react';
import './Join.css'
export default function Join(){
    
   return (
      <div className="formnOuterContainer">
        <div className="formInnerContainer">
          <h1 className="heading"> Chat Rooms</h1>
          <div>
            <input placeholder="Name" className="formInput" type="text"  />
          </div>
          <div>
            <input placeholder="Room" className="formInput button-margin" type="text"  />
          </div>
            <button className="button button-margin">Enter Room</button>
        </div>
      </div>
    );
}

