import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

// import './index.css';
import RectButton from './components/RectButton.js';
import CircleButton from './components/CircleButton.js';
import InputText from './components/InputText.js';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<RectButton text="button" textColor="black" background="gray" />, document.getElementById('root'));

// let iconSetting = <i class="fa fa-cog"></i>;
// let iconUser = <i class="fa fa-user"></i>;
// let iconLogout = <i class="material-icons">exit_to_app</i>;
// let iconInfo = <i class="fa fa-info"></i>;
// let iconInstruction = <i class="fa fa-book"></i>;


// ReactDOM.render(<CircleButton icon={iconLogout} />, document.getElementById('root'));

let iconUser = <i class='fa fa-user-o'></i>;

ReactDOM.render(<InputText icon={iconUser} type="text" placeholder="Username" />, document.getElementById('root'));
