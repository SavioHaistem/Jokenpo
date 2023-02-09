import React, { useEffect } from "react";
import { useState } from "react";
import './App.css';
import { Pedra, Papel, Tesoura } from "./engine/creator";
import { PlayerChooseBox } from "./components/playerchoose";
import { StartButton } from "./components/StartButton";


function App() {

    const [displays, setDisplays] = useState([
        { key: 0, elemento: <StartButton onClick={ChangeDisplay}/>, active: true },
        { key: 1, elemento: <PlayerChooseBox onClick={ChangeDisplay} player={1}></PlayerChooseBox>, active: false },
        { key: 2, elemento: <PlayerChooseBox onClick={ChangeDisplay} player={2}></PlayerChooseBox>, active: false },
    ]);

    const [DoShow, setDoShow] = useState(<StartButton Click={ChangeDisplay}/>)

    function ChangeDoShow() {
        return setDoShow(displays.find(display => display.active == true).elemento)
    }

    function ChangeDisplay() {

        var NextActiveItem = 0;
    
        for ( let i = 0; i < displays.length; i++) {
            if ( displays[i].active == true ) {
                
                i >= 2 ? NextActiveItem = 0 :  NextActiveItem = i + 1;
                displays[i].active = false;
                console.log(i)
            }
        }
        
            setDisplays(displays.map(display => { 
                    if(display.key == NextActiveItem) {
                            display.active = true
                    }
                    return display
                }
            )
        );
    };

    useEffect(()=>{ChangeDoShow()}, [displays])
    useEffect(()=>{console.log('mudou')}, [DoShow])


    return(
        <>  
            {DoShow}
        </>
    )
}

export default App;