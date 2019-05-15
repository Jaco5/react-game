import React from 'react'
import Player from '../Player'
import Map from '../Map'

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