import React from 'react';
import { v4 as uuid } from 'uuid';
import { Link } from 'react-router-dom';
import './ColorList.css';

function ColorList({ colorsList }) {
    return (
        <div className="ColorList">
            <h1>Welcome to the Color Factory.</h1>
            <p>Please Select a Color.</p>

            {
                colorsList.map(color =>
                    (<li key={uuid()}><Link to={`colors/${color}`}>{color}</Link></li>))
            }

            <p id='new'><Link to='/colors/new'>Add New Color</Link></p>
        </div >
    );
}

export default ColorList;