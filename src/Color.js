import React from 'react';
import { useParams, Link } from "react-router-dom";
import './Color.css';

function Color() {
    const { color } = useParams();

    const defaultStyles = {
        backgroundColor: 'white',
        width: 'fit-content',
        height: 25
    }

    const style = {
        backgroundColor: color,
        height: 100 + 'vh'
    }

    return (
        <div className='Color' style={style}>
            <Link to='/colors' style={defaultStyles}>Back to Colors List</Link>
            <p style={defaultStyles}>Your Color is {color}.</p>
        </div >
    );
}

export default Color;