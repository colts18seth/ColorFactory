import React, { useState } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import ColorList from './ColorList';
import Color from './Color';
import NewColor from './NewColor';

function Routes() {
    const INITIAL_STATE = ["red", "white", "blue"];
    const [colors, setColors] = useState(INITIAL_STATE);
    const history = useHistory();

    const handleAddColor = () => {
        const color = document.getElementById('color');
        setColors([...colors, color.value])
        history.push(`/colors/${color.value}`);
    }

    return (
        <Switch>
            <Route exact path='/colors/new'>
                <NewColor handleAddColor={handleAddColor} />
            </Route>
            <Route exact path='/colors/:color'>
                <Color />
            </Route>
            <Route exact path='/colors'>
                <ColorList
                    colorsList={colors}
                />
            </Route>
            <Redirect to='/colors' />
        </Switch>
    );
}

export default Routes;


