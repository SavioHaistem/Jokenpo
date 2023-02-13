import React from 'react'


export function StartButton( props ) {
    return (
        <button onClick={()=>{props.onClick()}} className='CircularButton'> Jogar </button>
    )
}