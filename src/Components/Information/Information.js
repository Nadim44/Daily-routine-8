import React from 'react';
import './Information.css'

const Information = (props) => {
    const { time } = props;
    // console.log(time)
    let totalTime = 0;
    for (const subject of time) {
        totalTime = totalTime + subject.time
    }

    return (
        <div className='information'>
            <div >
                <div>
                    <h3>Nadim Mahamud</h3>
                    <p>Narsingdi,Dhaka</p>
                </div>
                <p style={{ padding: '10px' }}>My name is Nadim. I did my Diploma course in computer From Narsingdi Polytechnic Institute. Currently i pursuing BSC in CSE at Eastern University.</p>
            </div>
            <div>
                <h2>Add A Break</h2>
                <button className='break-btn'>20<small>min</small></button>
                <button className='break-btn'>30<small>min</small></button>
                <button className='break-btn'>40<small>min</small></button>
                <button className='break-btn'>50<small>min</small></button>
            </div>
            <div style={{ marginBottom: '50px', marginTop: '50px' }}>
                <h2>Time Details</h2>
                <h4 className='study-time'>Study Time: {totalTime} <small>minutes</small></h4>
                <h4 id='break-time' className='study-time'>Break Time: 0 <small>minutes</small></h4>
            </div>
            <button className='activity'>
                <h2>Activity Completed</h2>
            </button>
        </div>
    );
};

export default Information;