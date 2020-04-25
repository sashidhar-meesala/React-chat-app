import React from 'react';
import './OnlineUsers.css';

const OnlineUsers = ({ users }) => (
  <div className="onlineInfo">
    { //if users object has some data .. loop through it show them in online info tab.
      users
        ? (
          <div>
            <h2> ANNONYMOUS! IM </h2>
            <h2>Who's Online?<span role="img" aria-label="emoji">💬</span></h2>
            <div className="OnlineInfoContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="Item">
                    <span role="img" aria-label="emoji">❤️</span>
                    {name}
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default OnlineUsers;