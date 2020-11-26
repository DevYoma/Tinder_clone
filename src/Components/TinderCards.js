import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import Mark from '../assets/Mark.jpg';
import Steve from '../assets/SteveJobs.jpg';
import './TinderCards.css';

const TinderCards = () => {

    const [people, setPeople] = useState([
        {
            name: 'Steve Jobs',
            url: Steve
        },
        {
            name: 'Mark Zukerberg',
            url: Mark
        }
    ])
    return ( 
        <div>
            <h3>TinderCard</h3>
            <div className="tinderCards__cardContainer">
                {people.map(person => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={[ 'up', 'down' ]}
                    >
                        <div style={{ backgroundImage: `url(${person.url})` }} className="card">
                            <h3>{person.name}</h3>
                        </div>
                        
                    </TinderCard>

                ))}
            </div>
        </div>
     );
}
 
export default TinderCards;