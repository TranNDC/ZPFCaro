import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

import RectButton from './subcomponents/RectButton.js';
import CircleButton from './subcomponents/CircleButton.js';
import InputText from './subcomponents/InputText.js';
import LogoTitle from './subcomponents/LogoTitle.js';
import EditText from './subcomponents/EditText.js';
import Slider from './subcomponents/Slider.js'
import Message from './subcomponents/Message.js'
<<<<<<< Updated upstream
=======
import ChatFrame from './components/ChatFrame'
>>>>>>> Stashed changes
import GameAvatar from './subcomponents/GameAvatar.js'
import Header from './components/Header'

import GameSideBar from './components/GameSideBar';
import Game from './pages/Game.js'

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
// ReactDOM.render(<InputText type="username" />, document.getElementById('root'));


// -------------------------------
// TEST EDITTEXT
// -------------------------------
// type: password | newpassword | email | displayedname
// ReactDOM.render(<EditText type="email" email="Kienquoctran08@gmail.com" />, document.getElementById('root'));
// ReactDOM.render(<EditText type="displayedname" displayedname="Trần Kiến Quốc" />, document.getElementById('root'));
// ReactDOM.render(<EditText type="password" />, document.getElementById('root'));
// ReactDOM.render(<EditText type="newpassword" />, document.getElementById('root'));


// -------------------------------
// TEST HEADINGICON
// -------------------------------
// type: profile | rules | info | settings | logout
// ReactDOM.render(<CircleButton type="profile" />, document.getElementById('root'));


// -------------------------------
// TEST LOGOTITLE
// -------------------------------
// ReactDOM.render(<LogoTitle text="ZPF Caro" />, document.getElementById('root'));


// -------------------------------
// SLIDER
// -------------------------------
// type: | sounds | media | 
// ReactDOM.render(<Slider type="Media" />, document.getElementById('root'));


// -------------------------------
// MESSAGE
// -------------------------------
// type: | response | recieve | 
// avatar: {avatarlink}
// message
// let avatar = require("./media/avatar.png")
// ReactDOM.render(<Message type="response" avatar={avatar} message="Chị hiểu hông?" />, document.getElementById('root'));


// -------------------------------
// CHAT FRAME
// -------------------------------
// opponent {avatar, username,isHost}
// messages {type, avatar, message}
// let avatar = require("./media/avatar.png")

// let opponent = {
//     'avatar': {avatar},
//     'username': 'Trann Nguyen',
//     'isHost': 0
// }

// let messages = [
//     {
//         'type':'response',
//         'avatar':avatar,
//         'message':"hello What are you doing mannnn??"
//     },
//     {
//         'type':'resquest',
//         'avatar':avatar,
//         'message':"hello What the heooo mann??ahoifshoiahfsoiahfsssssssss"
//     }
// ]

// ReactDOM.render(<ChatFrame opponent={opponent} messages={messages} />, document.getElementById('root'));


// -------------------------------
// GAME AVATAR
// -------------------------------
// type: active
// avatar
// pattern
// let avatar = require("./media/avatar.png")

// ReactDOM.render(<GameAvatar type="active" avatar={avatar} pattern='x' />, document.getElementById('root'));



// -------------------------------
// GAME SIDE BAR
// -------------------------------
// type: active
// avatar
// pattern
let avatar = require("./media/avatar.png")

ReactDOM.render(<GameSideBar avatar={avatar} />, document.getElementById('root'));











// -------------------------------
// TEST HEADER
// -------------------------------
ReactDOM.render(<Header />, document.getElementById('root'));