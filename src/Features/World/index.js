import React from 'react'
import Player from '../Player'
import Map from '../Map'
import { tiles } from '../../data/maps/1'

// import store from '. stopped at 31:41

function World(props) {
    return (
        <div
            style={{
                position : 'relative',
                margin : '10% auto',
                width : '800px',
                height : '400px',


            }}
        >
            <Player />
            <Map />
            
        </div>
    )
}

export default World 