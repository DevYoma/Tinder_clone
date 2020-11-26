import React, { useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';
import Mark from '../assets/Mark.jpg';
import Steve from '../assets/SteveJobs.jpg';
import './TinderCards.css';
import database from '../Firebase/Firebase';

const TinderCards = () => {

    const [people, setPeople] = useState([])

    useEffect(() => {
        //firebase stuff
        const unsubscribe = database.collection('people').onSnapshot((snapshot) => (
            setPeople(snapshot.docs.map(doc => doc.data()))
        ))

        return () => {
            //this is the cleanup...
            // this detaches the listener in the browser...
            unsubscribe();
        }
    }, [])

    return ( 
        <div>
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