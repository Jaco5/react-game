import React from 'react'
import { SPRITE_SIZE } from '../../config/constants'
import './styles.css'
import { connect } from 'react-redux'


function getTileSprite(type) {
    switch (type) {
        case 0:
            return 'space'
        case 5:
            return 'asteroid'
        case 6:
            return 'station'
        default : return 'space'
    }
}

function MapTile(props) {
    return <div
        className={`tile ${getTileSprite(props.tile)}`}
        style={{
            height: SPRITE_SIZE,
            width: SPRITE_SIZE
        }}
    />
}

function MapRow(props) {
    return <div className="row">
        {
            props.tiles.map(tile => <MapTile tile={tile} />)
        }
    </div>
}

function Map(props) {
    return (
        <div
            style={{
                width: '800px',
                height: '400px',
                // backgroundColor: 'black',
                top: '0px',
                left: '0px'

            }}
        >
            {
                props.tiles.map(row => <MapRow tiles={row} />)}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        tiles : state.map.tiles,
    }
}

export default connect(mapStateToProps)(Map) 