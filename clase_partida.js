const {Player} = require("./Clase_jugador.js")
const prompt = require("prompt-sync")()
const {ScoreBoard}= require("./clase_tablero")



class Partida {
  constructor(numberPlayer) {
    this.playerNum = numberPlayer;
    this.players = [];
    this.scoreBoard = new ScoreBoard
  }
  startGame() {
    for (var i = 0; i < this.playerNum; i++) {
      const name = prompt(`Player ${i + 1} name: `);
      this.players[i] = new Player(name);
    }
    
  }
  rollDice(){
    return Math.floor(Math.random()*6+1)
 }
 playingGame(){
    for (const i=0 ; i<10 ; i++){
        const selectedPlayer = Math.floor(Math.random()* this.playerNum)
        
    }
 }
}

const game = new Partida(2)
console.log(game.rollDice())






