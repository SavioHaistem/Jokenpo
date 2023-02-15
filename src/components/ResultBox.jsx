import { Player } from '../engine/creator'
import React, { useEffect } from 'react'

function Alert(props) {
    return(
        <>
            {props}
        </>
    )
}

export function Testar( player1, player2 ) {

    if ( player1.name == player2.name) {
        return 'Empate'
    } else if ( player1.vantagem == player2.name ) {
        return 'Jogador Um venceu'
    } else if ( player2.vantagem == player1.name ) {
        return 'Jogador Dois venceu'
    } else { console.log(player2.escolha, player1.escolha)}

}

function Result(EscolhaP1, EscolhaP2) {
    const Player_1 = new Player(EscolhaP1)
    const Player_2 = new Player(EscolhaP2)


    return Testar(Player_1, Player_2)
}

export function ResultBox({PlayerOneChoose, PlayerTwoChoose}) {

    return (
      <div className="AppBox">
        {Testar(PlayerOneChoose, PlayerTwoChoose)}
      </div>
    );
  }
  