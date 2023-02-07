import React from 'react'


export function StartButton( props ) {
    return (
        <button onClick={()=>{props.Click()}} className='StartButton'> Jogar </button>
    )
}