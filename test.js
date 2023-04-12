
const prompt = require("prompt-sync")();
/* const { ScoreBoard } = require( "./clase_tablero" );
const ob = {};



const array = [ { name: "agustin" }, { name: "pedro" } ];


const board = new ScoreBoard;
for ( let element of array ) {
    board.players[ element.name ] = 0;
}

board.players[ array[ 0 ].name ] = 3;

console.log( board.players );


playGame(){return};
 */
/*

      for ( const i, i< 4, i++) {
        console.log( `La Partida ha comenzado, Puntuacion: ${ clase_partida.js }` );
        let playerSelect = Math.floor( Math.random() * this.playerNum );
        console.log( this.players[ playerSelect ].name );
      }

    }


for ( var i = 0 ,) {
        console.log( `La Partida ha comenzado, Puntuacion: ${ clase_partida.js }` );
        let playerSelect = Math.floor( Math.random() * this.playerNum );
        console.log( this.players[ playerSelect ].name );
*/
        /* playGame () {
          console.log( `La Partida ha comenzado` );
          console.log( this.scoreBoard.players );
          for ( let i = 0; i < 10; i++ ) {
            let playerSelect = Math.floor( Math.random() * this.playerNum );
            let playerSelectName = this.players[ playerSelect ].name;
            let playerSelectscore = this.scoreBoard.players[ playerSelectName ] + this.rollDice();
            this.scoreBoard.players[ playerSelectName ] = playerSelectscore;
            console.log( this.scoreBoard.players );
            for ( const [ key, value ] of Object.entries( this.scoreBoard.players ) ) {if(value >=10){
              return console.log(`el jugador ${key} ha ganado la partida`)
            }
              ;
            }
          }
        }

        playGame(){
          console.log( `La Partida ha comenzado` );
          console.log( this.scoreBoard.players );
          for ( const [ key, value ] of Object.entries( this.scoreBoard.players ) ) {
            if(value >=10){ 
               return console.log(`el jugador ${key} ha ganado la partida`)
            }
            let playerSelect = Math.floor( Math.random() * this.playerNum );
            let playerSelectName = this.players[ playerSelect ].name;
            let playerSelectscore = this.scoreBoard.players[ playerSelectName ] + this.rollDice();
            this.scoreBoard.players[ playerSelectName ] = playerSelectscore;
            console.log( this.scoreBoard.players );
        }}


        playGame () {
          console.log( `La Partida ha comenzado` );
          console.log( this.scoreBoard.players );
          for ( let i = 0; i < 20; i++ ) {
            let playerSelect = Math.floor( Math.random() * this.playerNum );
            let playerSelectName = this.players[ playerSelect ].name;
            let playerSelectscore = this.scoreBoard.players[ playerSelectName ] + this.rollDice();
            this.scoreBoard.players[ playerSelectName ] = playerSelectscore;
            console.log( this.scoreBoard.players );
            for ( const [ key, value ] of Object.entries( this.scoreBoard.players ) ) {if(value >=20){
              return console.log(`El jugador ${key} ha ganado`);
            }
              ;
            }
          }
        }
        punishment(players){
          let unluckyNumber = this.rollDice()
          if (this.rollDice() === 0){
            let playerSelect = Math.floor(Math.random() * players);
            let playerSelectName = this.players[playerSelect].name;
            let playerSelectscore = 0 
            console.log("unluki")
          }
        }

        /playGame() {
          console.log(`La Partida ha comenzado`);
          console.log(this.scoreBoard.players);
          const scorePlayers = this.scoreBoard.players
          for (const [key, value] of scorePlayers) {
            if (value >= 20) {
              return console.log(`El jugador ${key} ha ganado`);
            }
            
            let playerSelect = Math.floor(Math.random() * this.playerNum);
            let playerSelectName = this.players[playerSelect].name;
            let playerSelectscore =
              scorePlayers[playerSelectName] + this.rollDice();
            scorePlayers[playerSelectName] = playerSelectscore;
            console.log(this.scoreBoard.players);
          }
        } 
 */
        function finishGame(){
          let answer = prompt (`Quieres juagar otra partida (y/n)`).toLowerCase()
          let checkAnswer = answer !== "y" && answer !== "n"
          while(checkAnswer){
            console.log(`tienes que responder (s/n)`)
            answer = prompt (`Quieres juagar otra partida (y/n)`).toLowerCase()
            checkAnswer = answer !== "y" && answer !== "n"
          }
          if (answer ==="y" ){this.runGame()}
          console.log(`juego finalizado`)
        }

        finishGame()