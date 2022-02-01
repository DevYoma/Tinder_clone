import React, { useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';
import database from '../Firebase/Firebase';
import Yoma from '../assets/yoma.jpg';
import TinderLogo from '../assets/tinderLogo.png'

const TinderCards = () => {

    const [people, setPeople] = useState([
        {
            name: "Emore Ogheneyoma", 
            url: Yoma
        },
        {
            name: "Tinder mf",
            url: TinderLogo
        }
    ])

    // useEffect(() => {
    //     const unsubscribe = database.collection('people').onSnapshot((snapshot) => (
    //         setPeople(snapshot.docs.map(doc => doc.data()))
    //     ))

    //     return () => {
    //         unsubscribe();
    //     }
    // }, [])

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete)
        // setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + " left the screen");
    }

    return ( 
        <div>
            <div className="tinderCards__cardContainer">
                {people.map(person => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={[ 'up', 'down' ]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
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