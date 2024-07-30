import React, { useEffect, useState } from "react";
import './App.css';
import { PlayerChooseBox } from "./components/PlayerChoose";
import { StartButton } from "./components/StartButton";
import { ChooseButton } from "./components/ChooseButton";
import { ResultBox } from "./components/ResultBox";

function Jokenpo() {

    //Estes estados armazenam as escolhas dos usuários
    const [PlayerOneChoose, setPlayerOneChoose] = useState('initial');
    const [PlayerTwoChoose, setPlayerTwoChoose] = useState('Initial');

    //Este estado armazena os componentes Pai que serão exibidos atravez da propriedade
    //active que irá dizer qual item deverá ser exibido
    const [Displays, setDisplays] = useState(
    
    [

        {
            key: 0,
            element: '{BaseApp}',
            active: true
        },
        { 
            key: 1, 
            element: <StartButton onClick={ComponentDidUpdate}/>, 
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

    //Este estado é responsável por exibir o componente que
    //receber a propriedade actived: true
    const [DoShow, setDoShow] = useState('')

    //Esta função é responsável por armazenar a escolha do usuário no momento
    //que ela for feita.
    function UpdateChoices() {
        setDisplays(Displays.map(display => {
            if (display.key === 4) {
                display.element = 
                    <ResultBox
                        PlayerOneChoose={{...PlayerOneChoose}}
                        PlayerTwoChoose={{...PlayerTwoChoose}}
                        restart={ComponentDidUpdate}
                    />
            } return display
        }))
    };

    //Esta função é responsavél por montar o componente que receber a 
    //propriedade true no momente que ele receber
    function ComponentDidMount() {
        return setDoShow(Displays.find(display => display.active == true).element)
    };

    //Esta função é responsável por atualizar o componente que receberá a propriedade
    // actived true
    function ComponentDidUpdate() {
        var NextActiveItem = 0;

        //Esta função limpará as escolhas dos usuários quando o app for
        //reinicializado
        function ClearAllChoices() {
            setPlayerOneChoose('');
            setPlayerTwoChoose('');
            return NextActiveItem = 0;
        };

        //Esta função controla para qual componente iremos mudar e
        //a reinicialização do app
        for ( let i = 0; i < Displays.length; i++) {
            if ( Displays[i].active == true ) {
                i >= 4 ? ClearAllChoices() :  NextActiveItem = i + 1;
                Displays[i].active = false;
            };
        };
        
            setDisplays(Displays.map(display => { 
                    if(display.key == NextActiveItem) {
                            display.active = true
                    }
                    return display
                }
            )
        );
    };

    //Estes hooks observam as variaveis para atualizar os valores e componentes
    //no momento que são alterados.
    useEffect(()=> {UpdateChoices(), ComponentDidUpdate()}, [PlayerOneChoose, PlayerTwoChoose])
    useEffect(()=> {ComponentDidMount()}, [Displays])
    return(
        <>
        adhkfah
            { DoShow }
        </>
    )
}

export default Jokenpo;