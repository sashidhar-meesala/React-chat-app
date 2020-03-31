import React from 'react';
import './FormComponent.css';
import sendbtn from './icons8-send-comment-50.png';


const FormComponent = ({ setMessage, sendMessage, message }) => (
  <form className="form">
    <input className="input" type="text" placeholder="Enter Your Text..."value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <button className="send"  onClick={e => sendMessage(e)}><img src={sendbtn} alt="send" /></button>
  </form>
)

export default FormComponent;