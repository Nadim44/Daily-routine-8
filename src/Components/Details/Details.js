import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Information from '../Information/Information';
import Subject from '../Subject/Subject';
import './Details.css'

const Details = () => {
    const [subjects, setSubjects] = useState([]);
    const [time, setTime] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setSubjects(data))
    }, [])

    const handleAddToCart = (subject) => {
        // console.log(subject)
        const newTime = [...time, subject]
        setTime(newTime)
    }

    return (
        <div className='details-container'>
            <div style={{ margin: '20px' }}>
                <div>
                    <h1 style={{ color: 'tomato' }}><FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon> My Daily Routine</h1>

                    <h2 >Select Today's Subject</h2>
                </div>
                <div className='subjects-container'>

                    {
                        subjects.map(subject => <Subject
                            key={subject.id}
                            subject={subject}
                            handleAddToCart={handleAddToCart}
                        ></Subject>)
                    }
                </div>

            </div>
            <div className="personal-details" >

                <Information time={time}></Information>

            </div>
        </div>
    );
};

export default Details;