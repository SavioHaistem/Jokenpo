import React from 'react';

export function Testar( player1, player2 ) {

    if ( player1.name == player2.name) {
        return 'Empate'
    } else if ( player1.vantagem == player2.name ) {
        return 'Jogador Um venceu'
    } else if ( player2.vantagem == player1.name ) {
        return 'Jogador Dois venceu'
    } else { console.log(player2.escolha, player1.escolha)}

};

export function ResultBox({PlayerOneChoose, PlayerTwoChoose, restart}) {

    return (
        <>    
          <div className="AppBox">
            {Testar(PlayerOneChoose, PlayerTwoChoose)}
            <button className='CircularButton' onClick={restart}> Reiniciar </button>
          </div>
        </>
    );
};