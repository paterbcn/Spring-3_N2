const { ScoreBoard } = require( "./clase_tablero" );
const ob = {};



const array = [ { name: "agustin" }, { name: "pedro" } ];


const board = new ScoreBoard;
for ( let element of array ) {
    board.players[ element.name ] = 0;
}

board.players[ array[ 0 ].name ] = 3;

console.log( board.players );


playGame(){return};

/*

      for ( const i, i< 4, i++) {
        console.log( `La Partida ha comenzado, Puntuacion: ${ clase_partida.js }` );
        let playerSelect = Math.floor( Math.random() * this.playerNum );
        console.log( this.players[ playerSelect ].name );
      }

    }
*/

for ( var i = 0 ,) {
        console.log( `La Partida ha comenzado, Puntuacion: ${ clase_partida.js }` );
        let playerSelect = Math.floor( Math.random() * this.playerNum );
        console.log( this.players[ playerSelect ].name );

