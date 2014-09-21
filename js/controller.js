var Simon = Simon || {};

Simon.Controller = function(opts){
  var self = this;
  this.game = opts.game;
  this.view = opts.view;

  this.executeTurn = function() {
    console.log("NEW TURN");
    // turn off listeners for clicks?
    // tell game to start turn
    self.game.nextTurn();
    // tell view to show the sequence, taking the game as an argument?
    self.view.showSequence(self.game);
    // turn listeners on for the clicks/have some checker for a click.
  };

  this.bindListeners = function(){
    document.querySelector('.board').addEventListener('click', this.buttonClicked);
    document.addEventListener('correct', this.correctGuess);
    document.addEventListener('wrong', this.wrongGuess);
    document.addEventListener('newTurn', this.executeTurn);
  };

  this.buttonClicked = function(e){
    var clickedButton = parseInt( e.target.dataset.gameButton );
    self.game.checkGuess(clickedButton);
    self.view.lightSquare(clickedButton);
  };

  this.correctGuess = function(){
    console.log("YOU GUESSED CORRECTLY");
    self.view.updateScore( self.currentScore() );
  };

  this.wrongGuess = function(){
    console.log("YOU GUESSED WRONG");
    self.gameOver();
    // self.restartGame();
  };

  this.gameOver = function(){
    self.view.gameOver();
    self.bindModalListeners();
  }

  this.restartGame = function(){
    self.view.restart();
    self.game.restart();
    self.executeTurn();
  };

  this.currentScore = function(){
    return this.game.getScore();
  };

  this.bindModalListeners = function(){
    document.querySelector('[data-role="restart-game"]').addEventListener("click", this.restartGame);
    document.querySelector('[data-role="cancel"]').addEventListener("click", this.restartGame);
    document.addEventListener('keyup', this.checkKeyupForRestart);
  };

  this.checkKeyupForRestart = function(e){
    if(e.keyCode == 13 || e.keyCode == 27){
      self.restartGame();
    }
  };
};