import React from 'react';
import Landscape from './Landscape';
import MovingObject from './MovingObject';
import Trucks from './Trucks';
import Boat from './Boat';
import Frog from './Frog';

function World() {
    return (
        <div className="world">
            <Landscape />
            <Trucks />
            <Boat />
            <Frog />
        </div>
    )
}

export default World;