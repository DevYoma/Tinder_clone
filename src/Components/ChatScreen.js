import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import './ChatScreen.css';
import Yoma from '../assets/yoma.jpg';


const ChatScreen = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: "Amminat",
            image: '',
            message: "Yo Whats up"
        },
        {
            name: "Amminat",
            image: '',
            message: "How's coding boo 💖"
        },
        {
           message: "I'm holding up bae 🤔",
           image: Yoma
        },
    ])

    const handleSend = (e) => {
        e.preventDefault();
        setMessages([...messages, {message: input}])
        // honestly, this is the magic line here, just so wonderful
        setInput('');
    }

    return ( 
        <div className="chatScreen">
            <p className="chatScreen__timeStamp">You matched with AMMINAT on 10/08/2020</p>
            {messages.map(message => (
                message.name ? (

                <div className="chatScreen__message">
                    <Avatar
                        className="chatScreen__image"
                        alt={message.name}
                        src={message.image}
                    />
                    <p className="chatScreen__text">{message.message}</p>
                </div>
                ) : (
                    <div className="chatScreen__message">
                    <p className="chatScreen__textUser">{message.message}</p>
                    {/* <Avatar
                        className="chatScreen__image"
                        alt={message.name}
                        src={message.image}
                    /> */}
                </div>
                )
            ))}

                <form className="chatScreen__input">
                    <input
                     className="chatScreen__inputField"
                     type="text" 
                     placeholder="Type a message"
                     value={input}
                     onChange={e => setInput(e.target.value)}
                     />
                    <button onClick={handleSend} className="chatScreen__inputButton">SEND</button>
                </form>
        </div>
     );
}
 
export default ChatScreen;