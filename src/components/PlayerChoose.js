import React from "react";

export function PlayerChooseBox(props) {
    return(
        <div className="PlayerChooseBox">
            <h1 className="PlayerName">
                Jogador { props.player }
            </h1>
            <button onClick={props.onClick}> Confirmar </button>
        </div>
    )
}

