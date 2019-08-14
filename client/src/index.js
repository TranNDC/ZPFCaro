import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

import RectButton from './components/RectButton.js';
import CircleButton from './components/CircleButton.js';
import InputText from './components/InputText.js';
import LogoTitle from './components/LogoTitle.js';
import EditText from './components/EditText.js';


// -------------------------------
// TEST RECTBUTTON
// -------------------------------
// ReactDOM.render(<RectButton text="button" background="gray" textColor="black" />, document.getElementById('root'));
// background="gray" => Nếu không có background sẽ là màu cam
// textColor="black" => Nếu không có chữ sẽ mang màu trắng


// -------------------------------
// TEST INPUTTEXT
// -------------------------------
// type: username | password | confirmedpassword | email | displayedname | roompassword | betpoints | roomname
// ReactDOM.render(<InputText type="confirmedpassword" />, document.getElementById('root'));


// -------------------------------
// TEST EDITTEXT
// -------------------------------
// type: password | newpassword | email | displayedname
// ReactDOM.render(<EditText type="email" email="Kienquoctran08@gmail.com" />, document.getElementById('root'));
// ReactDOM.render(<EditText type="displayedname" displayedname="Trần Kiến Quốc" />, document.getElementById('root'));
// ReactDOM.render(<EditText type="password" />, document.getElementById('root'));
ReactDOM.render(<EditText type="newpassword" />, document.getElementById('root'));


// -------------------------------
// TEST HEADINGICON
// -------------------------------
// type: profile | rules | info | settings | logout
// ReactDOM.render(<CircleButton type="profile" />, document.getElementById('root'));


// -------------------------------
// TEST LOGOTITLE
// -------------------------------
// ReactDOM.render(<LogoTitle text="ZPF Caro" />, document.getElementById('root'));


//.....




