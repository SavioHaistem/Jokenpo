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
            element: '{BaseApp}',
            active: true
        },
        { 
            key: 1, 
            element: <StartButton onClick={ChangeDisplay}/>, 
            active: false 
        },
        { 
            key: 2, 
            element: <PlayerChooseBox player={1}>
                        <ChooseButton setChoose={(value) => setPlayerOneChoose(value)} />
                    </PlayerChooseBox>, 
            active: false 
        },
        { 
            key: 3, 
            element: <PlayerChooseBox player={2}>
                        <ChooseButton setChoose={value => setPlayerTwoChoose(value)} />
                    </PlayerChooseBox>, 
            active: false 
        },
        { 
            key: 4, 
            element: '', 
            active: false 
        }
    ]
);

    const [DoShow, setDoShow] = useState('')

    function ChangeChoice() {
        setDisplays(Displays.map(display => {
            if (display.key === 4) {
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
                
                i >= 4 ? NextActiveItem = 0 :  NextActiveItem = i + 1;
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

    useEffect(()=> {ChangeChoice(), ChangeDisplay()}, [PlayerOneChoose, PlayerTwoChoose])
    useEffect(()=> {ToggleDoShow()}, [Displays])
    return(
        <>
            { DoShow }
        </>
    )
}

export default App;