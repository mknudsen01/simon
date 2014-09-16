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
    self.restartGame();
  };

  this.restartGame = function(){
    self.game.restart();
    self.view.restart();
    self.executeTurn();
  };

  this.currentScore = function(){
    return this.game.getScore();
  };
};