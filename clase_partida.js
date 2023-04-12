const { Player } = require("./Clase_jugador.js");
const prompt = require("prompt-sync")();
const { ScoreBoard } = require("./clase_tablero");

class Partida {
  constructor(numberPlayer) {
    this.playerNum = numberPlayer;
    this.players = [];
  }

  scoreBoard = {};
  startGame() {
    // crecacion nuevas intancias jugadores
    for (var i = 0; i < this.playerNum; i++) {
      const name = prompt(`Player ${i + 1} name: `);
      this.players[i] = new Player(name);
    }
    // creacion de los jugadares en la instancia clase_tablero
    /* this.scoreBoard = new ScoreBoard();
    for (let element of this.players) {
      this.scoreBoard.players[element.name] = 0;
    } */
    this.runGame();
  }

  playGame() {
    console.log(`La Partida ha comenzado`);
    console.log(this.scoreBoard.players);
    const playersScore = this.scoreBoard.players;
    while (true) {
      let playerSelect = Math.floor(Math.random() * this.playerNum);
      let playerSelectName = this.players[playerSelect].name;
      playersScore[playerSelectName] += this.rollDice();
      console.log(playersScore);
      if (playersScore[playerSelectName] >= 50) {
        return console.log(`El jugador ${playerSelectName} ha ganado`);
      }
      this.punishment(this.playerNum);
    }
  }

  rollDice() {
    return Math.floor(Math.random() * 6 + 1);
  }

  punishment(players) {
    if (this.rollDice() === 6) {
      const playersScore = this.scoreBoard.players;
      let playerSelect = Math.floor(Math.random() * players);
      let playerSelectName = this.players[playerSelect].name;
      playersScore[playerSelectName] = 0;
      console.log(`El jugador ${playerSelectName} ha sido  penalizado`);
    }
  }

  finishGame() {
    let answer = prompt(`Quieres juagar otra partida (y/n)`).toLowerCase();
    let checkAnswer = answer !== "y" && answer !== "n";
    while (checkAnswer) {
      console.log(`tienes que responder (s/n)`);
      answer = prompt(`Quieres juagar otra partida (y/n)`).toLowerCase();
      checkAnswer = answer !== "y" && answer !== "n";
    }
    if (answer === "n") {return console.log(`juego finalizado`)
      ;
    }this.runGame()
    ;
  }

  runGame() {
    this.scoreBoard = new ScoreBoard();
    for (let element of this.players) {
      this.scoreBoard.players[element.name] = 0;
    }
    this.playGame();
    this.finishGame();
  }
}

const game = new Partida(2);
game.startGame()