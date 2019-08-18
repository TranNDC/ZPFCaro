import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

import RectButton from './subcomponents/RectButton';
import CircleButton from './subcomponents/CircleButton';
import InputText from './subcomponents/InputText';
import LogoTitle from './subcomponents/LogoTitle';
import EditText from './subcomponents/EditText';

import GameCell from './subcomponents/GameCell';
import GameBoard from './components/GameBoard';

import Slider from './subcomponents/Slider';
import Message from './subcomponents/Message';
import TableTitle from './subcomponents/TableTitle';
import ChatFrame from './components/ChatFrame';
import GameAvatar from './subcomponents/GameAvatar';
import LeaderBoardInfoRow from './subcomponents/LeaderBoardInfoRow';
import UserAvatar from './subcomponents/UserAvatar';
import UserInfoRow from './subcomponents/UserInfoRow';
import Header from './components/Header';
import GameSideBar from './components/GameSideBar';
import LeaderBoard from './components/LeaderBoard';
import UserInfo from './components/UserInfo';
import Game from './pages/Game';
import RoomInfoRow from './subcomponents/RoomInfoRow';
import GameRooms from './components/GameRooms';
import Homepage from './pages/Homepage';

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
// type: sounds | media | 
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
// let avatar = require("./media/avatar.png")
// ReactDOM.render(<GameSideBar avatar={avatar} />, document.getElementById('root'));



// -------------------------------
// GAME CELL
// -------------------------------
// patter: x | o

// ReactDOM.render(<GameCell pattern='o' />, document.getElementById('root'));



// -------------------------------
// GAME BOARD
// -------------------------------
// patter: x | o

// ReactDOM.render(<GameBoard width={20} height={20} />, document.getElementById('root'));


// -------------------------------
// GAME 
// -------------------------------
// let avatar = require("./media/avatar.png")
// ReactDOM.render(<Game  avatar={avatar}/>, document.getElementById('root'));



// -------------------------------
// TEST HEADER
// -------------------------------
// ReactDOM.render(<Header />, document.getElementById('root'));


// -------------------------------
// TEST TABLETITLE
// -------------------------------
// ReactDOM.render(<TableTitle text="GAMEROOM" />, document.getElementById('root'));


// -------------------------------
// TEST LEADERBOARDINFOROW
// -------------------------------
// ReactDOM.render(<LeaderBoardInfoRow rank="6" displayedname="Trần Kiến Quốc" points="600000" />, document.getElementById('root'));


// -------------------------------
// TEST LEADERBOARD
// -------------------------------
// ReactDOM.render(<LeaderBoard />, document.getElementById('root'));


// -------------------------------
// TEST USERAVATAR
// -------------------------------
// ReactDOM.render(<UserAvatar avatar={require("./media/avatar.png")} />, document.getElementById('root'));


// -------------------------------
// TEST USERINFOROW
// -------------------------------
// type: username | displayedname | points | winningrate | ranking | windrawlose
// ReactDOM.render(<UserInfoRow type="username" username="quoctk08" />, document.getElementById('root'));
// ReactDOM.render(<UserInfoRow type="displayedname" displayedname="Trần Kiến Quốc" />, document.getElementById('root'));
// ReactDOM.render(<UserInfoRow type="points" points="800000" />, document.getElementById('root'));
// ReactDOM.render(<UserInfoRow type="winningrate" winningrate="68" />, document.getElementById('root'));
// ReactDOM.render(<UserInfoRow type="ranking" ranking="172" />, document.getElementById('root'));
// ReactDOM.render(<UserInfoRow type="windrawlose" wins="81315" draws="41123" loses="10092" />, document.getElementById('root'));


// -------------------------------
// TEST USERINFO
// -------------------------------
// Notice: UserInfo component must have 4 UserInfoRow types with their values
// ReactDOM.render(<UserInfo avatar={require("./media/avatar.png")} type1="displayedname" displayedname="Trần Kiến Quốc" type2="points" points="800000" type3="winningrate" winningrate="68" type4="windrawlose" wins="81315" draws="41123" loses="10092" />, document.getElementById('root'));


// -------------------------------
// TEST ROOMINFOROW
// -------------------------------
// ReactDOM.render(<RoomInfoRow roomid="R101" roomname="Vao day solo nhe anh em" displayedname="Trần Kiến Quốc" betpoints="500000" password="true" />, document.getElementById('root'));


// -------------------------------
// TEST GAMEROOMS
// -------------------------------
// ReactDOM.render(<GameRooms />, document.getElementById('root'));


// -------------------------------
// TEST HOMEPAGE
// -------------------------------
ReactDOM.render(<Homepage />, document.getElementById('root'));

