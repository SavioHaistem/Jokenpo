import React from "react";

export function PlayerChooseBox(props) {
    return(
        <div className="AppBox">
            <h1 className="PlayerName">
                Jogador { props.player }
            </h1>
            { props.children }
            <button className='CircularButton' onClick={props.onClick}> Confirmar </button>
        </div>
    )
}

