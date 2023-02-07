import React, { useEffect } from "react";
import { useState } from "react";
import './App.css';
import { Pedra, Papel, Tesoura } from "./engine/creator";
import { PlayerChooseBox } from "./components/playerchoose";
import { StartButton } from "./components/StartButton";


function App() {

    const displays = [
        { element: <StartButton Click={GoToShow}/>, active: true },
        { element: <PlayerChooseBox player={1}/>, active: false },
        { element: <PlayerChooseBox player={1}/>, active: false }
    ];
    const [DoShow, setDoShow] = useState(displays[0]);

    const ToShow = {
        display: displays[1],
        setToShow() {
            this.display = displays.find(display => display.active == true)
        }
    };

    function GoToShow() {
        setDoShow(ToShow.display)
    };

    useEffect(()=>{GoToShow}, [ToShow.display]);
    useEffect(()=>{ToShow.setToShow}, [displays]);

    return(
        <>  
            {DoShow.element}
        </>
    )
}

export default App;