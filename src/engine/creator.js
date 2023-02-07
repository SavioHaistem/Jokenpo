const Pedra = { name: 'Pedra', fraqueza: 'Papel', vantagem: 'Tesoura' }
const Tesoura = { name: 'Tesoura', fraqueza: 'Pedra', vantagem: 'Papel'}
const Papel = { name: "Papel", fraqueza: "Tesoura", vantagem: 'Pedra'}


export class Player {
    constructor(escolha) {
        this.escolha = escolha
    }
}


export { Pedra, Tesoura, Papel }