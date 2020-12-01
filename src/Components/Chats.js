import React from 'react';
import Chat from './Chat';
import Yoma from '../assets/yoma.jpg';
import './Chats.css';

const Chats = () => {
    return ( 
        <div className="chats">
            <Chat 
                name="Amminat"
                message="YO whats up"
                timestamp="40 seconds ago"
                // profilePic=""
            />

            <Chat 
                name="Sarah"
                message="Whats up Yoma 💖"
                timestamp="4 days ago"
                profilePic={Yoma}
            />

            <Chat 
                name="Samuel"
                message="Hows the FE going"
                timestamp="10 minutes ago"
                // profilePic=""
            />

            <Chat 
                name="Oye"
                message="Good things take time"
                timestamp="1 hour ago"
                profilePic={Yoma}
            />
        </div>
     );
}
 
export default Chats;