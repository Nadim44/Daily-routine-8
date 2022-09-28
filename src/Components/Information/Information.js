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
                <p>Nadim Mahamud</p>
            </div>
            <div>
                <h2>Time Details</h2>
                {/* <h4>Study Time: {time.length}</h4> */}
                <h4 style={{ backgroundColor: 'gray', padding: '5px' }}>Study Time: {totalTime} <small>minutes</small></h4>
            </div>
        </div>
    );
};

export default Information;