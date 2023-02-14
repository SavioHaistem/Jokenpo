import { Player } from '../engine/creator'
import React, { useEffect } from 'react'

const Alert = (mensagem) => {
    console.log(mensagem)
}

export function Testar( player1, player2 ) {

    if ( player1.escolha == player2.escolha) {
        Alert('EMPATE')
    } else if ( player1.escolha.vantagem == player2.escolha.name ) {
        Alert('Jogador Um venceu')
    } else if ( player2.escolha.vantagem == player1.escolha.name ) {
        Alert('Jogador Dois venceu')
    } else { console.log(player2.escolha, player1.escolha)}

}

function Result(EscolhaP1, EscolhaP2) {
    const Player_1 = new Player(EscolhaP1)
    const Player_2 = new Player(EscolhaP2)


    return Testar(Player_1, Player_2)
}

export function ResultBox({Player1}) {  
    return (
      <div className="AppBox">
        <h1>{Player1.name}</h1>
      </div>
    );
  }
  