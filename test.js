const {ScoreBoard}= require("./clase_tablero")
const ob ={}


const array =["juan","pedro","maria"]
const board = new ScoreBoard
for (let element of array){
    board.players[element]=0
    }


console.log(board.players)
    

