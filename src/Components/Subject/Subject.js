import React from 'react';
import './Subject.css'

const Subject = (props) => {
    // console.log(props.subject)
    const { name, img, time } = props.subject;
    // console.log(props)
    // const {handleAddToCart}=props

    return (
        <div className='subject'>
            <img src={img} alt="" />
            <div className='subject-info'>
                <h2>{name}</h2>
                <h4>Time required: {time} <small>minutes</small></h4>
            </div>
            <button onClick={() => props.handleAddToCart(props.subject)} className='btn-select'>
                <p>Add to List</p>
            </button>
        </div>
    );
};

export default Subject;