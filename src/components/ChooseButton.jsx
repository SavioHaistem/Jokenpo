import React from "react";
import TesouraIcon from '../img/TesouraIcon.png'

export function ChooseButton() {
    return(
        <ol className="ChosseList">
            <div className="ChooseButton"> <img src={TesouraIcon} alt="Tesoura" /> </div>
            <div className="ChooseButton"> <img src={TesouraIcon} alt="Tesoura" /> </div>
            <div className="ChooseButton"> <img src={TesouraIcon} alt="Tesoura" /> </div>
        </ol>
    )
}