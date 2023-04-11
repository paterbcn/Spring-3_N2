const { Player } = require( "./Clase_jugador.js" );
const prompt = require( "prompt-sync" )();
const { ScoreBoard } = require( "./clase_tablero" );



class Partida {
  constructor ( numberPlayer ) {
    this.playerNum = numberPlayer;
    this.players = [];
    this.scoreBoard = new ScoreBoard( "test" );
  }
  startGame () {
    // crecacion nuevas intancias jugadores
    for ( var i = 0; i < this.playerNum; i++ ) {
      const name = prompt( `Player ${ i + 1 } name: ` );
      this.players[ i ] = new Player( name );
    }
    // creacion de los jugadares en la instancia clase_tablero
    for ( let element of this.players ) {
      this.scoreBoard.players[ element.name ] = 0;

    }
  }
  playGame () {
    console.log( `La Partida ha comenzado` );
    console.log( this.scoreBoard.players );
    for ( let i = 0; i < 10; i++ ) {
      let playerSelect = Math.floor( Math.random() * this.playerNum );
      let playerSelectName = this.players[ playerSelect ].name;
      let playerSelectscore = this.scoreBoard.players[ playerSelectName ] + this.rollDice();
      this.scoreBoard.players[ playerSelectName ] = playerSelectscore;
      console.log( this.scoreBoard.players );
      for ( const [ key, value ] of Object.entries( this.scoreBoard.players ) ) {if(value)
        console.log( value );
      }
    }
  }


  rollDice () {
    return Math.floor( Math.random() * 6 + 1 );
  };

}

const game = new Partida( 3 );
game.startGame();
game.playGame();












