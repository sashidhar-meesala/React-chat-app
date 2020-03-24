import React from 'react';
import './FormComponent.css';
import sendbtn from './icons8-send-comment-50.png';


const FormComponent = () => (
  <form className="form">
    <input className="input" type="text" placeholder="Enter Your Text..."/>
    <button className="send"><img src={sendbtn} alt="send" /></button>
  </form>
)

export default FormComponent;