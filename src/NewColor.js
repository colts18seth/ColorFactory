import React from 'react';
import { Link } from 'react-router-dom';
import './NewColor.css'

function NewColor({ handleAddColor }) {
    const defaultStyles = {
        backgroundColor: 'white',
        width: 'fit-content',
        height: 25
    }

    return (
        <div className='NewColor'>
            <Link to='/colors' style={defaultStyles}>Back to Colors List</Link>
            <h1>Add a New Color</h1>
            <input autoFocus id='color' type='text' />
            <button type='button' onClick={() => handleAddColor()}>Add</button>
        </div >
    );
}

export default NewColor;