import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Subject from '../Subject/Subject';
import './Details.css'
const Details = () => {
    const [subjects, setSubjects] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setSubjects(data))
    }, [])
    return (
        <div className='details-container'>
            <div style={{ margin: '20px' }}>
                <div>
                    <h1>My Daily Routine</h1>
                    <h2>Select Today's Subject</h2>
                </div>
                <div className='subjects-container'>

                    {
                        subjects.map(subject => <Subject
                            key={subject.id}
                            subject={subject}
                        ></Subject>)
                    }
                </div>

            </div>
            <div className="personal-details">
                <p>Nadim Mahamud</p>
            </div>
        </div>
    );
};

export default Details;