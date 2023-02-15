import React, { useEffect, useState } from "react";
import './App.css';
import { PlayerChooseBox } from "./components/playerchoose";
import { StartButton } from "./components/StartButton";
import { ChooseButton } from "./components/ChooseButton";
import { ResultBox } from "./components/ResultBox";

function App() {

    const [PlayerOneChoose, setPlayerOneChoose] = useState('initial');
    const [PlayerTwoChoose, setPlayerTwoChoose] = useState('Initial');

    const [Displays, setDisplays] = useState(
    
    [

        { 
            key: 0, 
            element: <StartButton onClick={ChangeDisplay}/>, 
            active: true 
        },
        { 
            key: 1, 
            element: <PlayerChooseBox player={1}>
                        <ChooseButton setChoose={(value) => setPlayerOneChoose(value)} />
                    </PlayerChooseBox>, 
            active: false 
        },
        { 
            key: 2, 
            element: <PlayerChooseBox player={2}>
                        <ChooseButton setChoose={value => setPlayerTwoChoose(value)} />
                    </PlayerChooseBox>, 
            active: false 
        },
        { 
            key: 3, 
            element: '', 
            active: false 
        }
    ]
);

    const [DoShow, setDoShow] = useState('')

    function ChangeChoice() {
        setDisplays(Displays.map(display => {
            if (display.key === 3) {
                display.element = 
                    <ResultBox
                        PlayerOneChoose={{...PlayerOneChoose}}
                        PlayerTwoChoose={{...PlayerTwoChoose}}
                    />
            } return display
        }))
    };

    function ToggleDoShow() {
        return setDoShow(Displays.find(display => display.active == true).element)
    };

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
        ToggleDoShow()
    };

    useEffect(()=> {ChangeChoice(), ChangeDisplay()}, [PlayerOneChoose, PlayerTwoChoose]);
    return(
        <>
            { DoShow }
        </>
    )
}

export default App;