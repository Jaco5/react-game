import React from 'react'
import playerSprite from './player_ship.png'
import { connect } from 'react-redux'
import handleMovement from './movement'

function Player(props) {

    return (
        <div
            style={{
                position : 'absolute',
                top : props.position[1],
                left : props.position[0],
                
                backgroundImage : `url('${playerSprite}')`,
                backgroundColor: 'transparent',
                backgroundPosition: '0 0',
                width : '40px',
                height : '40px',
                

            }} 
        />
    )
 }

 function mapStateToProps(state) {
     return {
         ...state.player, //same as typing all of state.player
     }
 }

export default connect(mapStateToProps)(handleMovement(Player))