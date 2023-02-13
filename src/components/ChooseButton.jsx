import React from "react";
import TesouraIcon from '../img/TesouraIcon.png';
import { Tesoura, Pedra, Papel } from "../engine/creator";

export function ChooseButton({setChoose}) {
    return(
        <ol className="ChosseList">
            <div className="ChooseButton" onClick={()=>setChoose(Tesoura)}> <img src={TesouraIcon} alt="Tesoura" /> </div>
            <div className="ChooseButton" onClick={()=>setChoose(Pedra)}> <img src={TesouraIcon} alt="Tesoura" /> </div>
            <div className="ChooseButton" onClick={()=>setChoose(Papel)}> <img src={TesouraIcon} alt="Tesoura" /> </div>
        </ol>
    )
}