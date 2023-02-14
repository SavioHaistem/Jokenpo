import React, { useEffect, useState } from "react";
import './App.css';
import { PlayerChooseBox } from "./components/playerchoose";
import { StartButton } from "./components/StartButton";
import { ChooseButton } from "./components/ChooseButton";
import { ResultBox } from "./components/ResultBox";

function App() {

    const [PlayerOneChoose, setPlayerOneChoose] = useState('');
    const [PlayerTwoChoose, setPlayerTwoChoose] = useState('');

    const [Displays, setDisplays] = useState(
    
    [

        { 
            key: 0, 
            element: <StartButton onClick={ChangeDisplay}/>, 
            active: true 
        },
        { 
            key: 1, 
            element: <PlayerChooseBox onClick={ChangeDisplay} player={1}>
                        <ChooseButton setChoose={value => setPlayerOneChoose(value)} /> 
                    </PlayerChooseBox>, 
            active: false 
        },
        { 
            key: 2, 
            element: <PlayerChooseBox onClick={ChangeDisplay} player={2}>
                        <ChooseButton setChoose={value => setPlayerTwoChoose(value)}/> 
                    </PlayerChooseBox>, 
            active: false 
        },
        { 
            key: 3, 
            element: <ResultBox/>, 
            active: false 
        }
    ]
);

    const [DoShow, setDoShow] = useState('')

    function ToggleDoShow() {
        return setDoShow(Displays.find(display => display.active == true).element)
    }

    function ChangeDisplay() {

        var NextActiveItem = 0;
    
        for ( let i = 0; i < Displays.length; i++) {
            if ( Displays[i].active == true ) {
                
                i >= 3 ? NextActiveItem = 0 :  NextActiveItem = i + 1;
                Displays[i].active = false;
            }
        }
        
            setDisplays(Displays.map(display => { 
                    if(display.key == NextActiveItem) {
                            display.active = true
                    }
                    return display
                }
            )
        );
    };

    useEffect(()=>{ToggleDoShow()}, [Displays])
    return(
        <>
            { PlayerOneChoose.name }
            { PlayerTwoChoose.name }
            { DoShow }
        </>
    )
}

export default App;