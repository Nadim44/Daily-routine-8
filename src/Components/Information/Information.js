import React from 'react';
import './Information.css'

const Information = (props) => {
    const { time } = props;
    // console.log(time)
    let totalTime = 0;
    for (const subject of time) {
        totalTime = totalTime + subject.time
    }
    const breakTimeHandler = () => {
        console.log('clicked')

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

                <button className='btn' onClick={breakTimeHandler}>30 <small>min</small></button>
                <button>40<small>min</small></button>
                <button>50<small>min</small></button>

            </div>
            <div>
                <h2>Time Details</h2>
                {/* <h4>Study Time: {time.length}</h4> */}
                <h4 style={{ backgroundColor: 'gray', padding: '5px' }}>Study Time: {totalTime} <small>minutes</small></h4>
                <h4 id='break-time'>Break Time: 0 <small>minutes</small></h4>
            </div>
            <button style={{ backgroundColor: 'orange' }}>
                <h2>Activity Completed</h2>
            </button>
        </div>
    );
};

export default Information;