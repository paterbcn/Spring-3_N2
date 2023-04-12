class ScoreBoard {
    constructor ( ) {
        if(ScoreBoard.instancia){
            return this
        }
        ScoreBoard.instancia =this
        
   }

   players={};

   
}

module.exports = {
    ScoreBoard
};
