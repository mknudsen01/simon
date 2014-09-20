var Simon = Simon || {};

Simon.Game = function(){
  this.totalScore = 0;
  this.turnScore = 0;
  this.sequence = [];
  this.currentTimeout;
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
    this.clearCurrentTimeout();
    if (guess == nextCorrectGuess){
     this.correctGuess();
    } else {
      this.wrongGuess();
    }
  },

  clearCurrentTimeout: function(){
    window.clearTimeout(this.currentTimeout);
  },

  correctGuess: function(){
    this.totalScore += (1 * this.scoreMultiplier() );
    this.turnScore += 1;
    document.dispatchEvent( new Event("correct") );
    if( this.isTurnFinished() ){
      var timeoutID = window.setTimeout( function() {
        document.dispatchEvent( new Event("newTurn") );
      }, 500);
      this.currentTimeout = timeoutID;
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
  },

  getScore: function(){
    return this.totalScore;
  },

  scoreMultiplier: function() {
    return this.sequence.length;
  }




};