import React from "react";
import { ChooseButton } from "./ChooseButton";

export function PlayerChooseBox(props) {
    return(
        <div className="PlayerChooseBox">
            <h1 className="PlayerName">
                Jogador { props.player }
            </h1>

            <ChooseButton />
        </div>
    )
}

