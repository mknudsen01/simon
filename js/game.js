var Simon = Simon || {};

Simon.Game = function(){
  this.totalScore = 0;
  this.turnScore = 0;
  this.sequence = [];
};

Simon.Game.prototype = {
  nextTurn: function() {
    this.turnScore = 0;
    this.sequence.push(this.randomNumberBetweenOneAnd(4));
  },

  randomNumberBetweenOneAnd: function(n) {
    return Math.floor(Math.random() * n) + 1;
  },

  checkGuess: function(guess){
    var currentPosition = this.turnScore;
    nextCorrectGuess = this.sequence[currentPosition];
    if (guess == nextCorrectGuess){
     this.correctGuess();
    } else {
      this.wrongGuess();
    }
  },

  correctGuess: function(){
    this.totalScore += 1;
    this.turnScore += 1;
    document.dispatchEvent( new Event("correct") );
    if( this.isTurnFinished() ){
      document.dispatchEvent( new Event("newTurn") );
    }
  },

  wrongGuess: function(){
    document.dispatchEvent( new Event("wrong") );
  },

  restart: function(){
    this.totalScore = 0;
    this.turnScore = 0;
    this.sequence = [];
  },

  isTurnFinished: function() {
    return this.turnScore == this.sequence.length;
  }




};