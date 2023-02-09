import React from 'react'


export function StartButton( props ) {
    return (
        <button onClick={()=>{props.onClick()}} className='StartButton'> Jogar </button>
    )
}