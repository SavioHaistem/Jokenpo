import React from "react";
import TesouraIcon from '../img/TesouraIcon.png';
import PedraIcon from '../img/PedraIcon.png';
import PapelIcon from '../img/PapelIcon.png';
import { Tesoura, Pedra, Papel } from "../engine/creator";

export function ChooseButton({setChoose}) {
    return(
        <ol className="ChosseList">
            <div className="ChooseButton" onClick={()=>setChoose(Tesoura)}> <img src={TesouraIcon} alt="Tesoura" /> </div>
            <div className="ChooseButton" onClick={()=>setChoose(Pedra)}> <img src={PedraIcon} alt="Tesoura" /> </div>
            <div className="ChooseButton" onClick={()=>setChoose(Papel)}> <img src={PapelIcon} alt="Tesoura" /> </div>
        </ol>
    )
}