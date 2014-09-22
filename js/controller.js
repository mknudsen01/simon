var Simon = Simon || {};

Simon.Controller = function(opts){
  var self = this;
  this.game = opts.game;
  this.view = opts.view;

  this.beginSimonsTurn = function() {
    self.unbindPlayerClickListeners();
    self.game.nextRound();
    self.view.simonsTurn();
    self.view.showSequence(self.game);
  };

  this.bindPlayerClickListeners = function(){
    document.querySelector('.board').addEventListener('click', this.buttonClicked);
    document.addEventListener('correct', this.correctGuess);
    document.addEventListener('wrong', this.wrongGuess);
    document.addEventListener('newTurn', this.beginSimonsTurn);
  };

  this.beginPlayerTurn = function(){
    self.bindPlayerClickListeners();
    self.view.playersTurn();
  };

  this.bindListeners = function(){
    document.addEventListener('sequenceDisplayFinished', this.beginPlayerTurn);
  };

  this.unbindPlayerClickListeners = function(){
    document.querySelector('.board').removeEventListener('click', this.buttonClicked);
    document.removeEventListener('correct', this.correctGuess);
    document.removeEventListener('wrong', this.wrongGuess);
    document.removeEventListener('newTurn', this.beginSimonsTurn);
  },

  this.buttonClicked = function(e){
    var clickedButton = parseInt( e.target.dataset.gameButton );
    self.game.checkGuess(clickedButton);
    self.view.lightSquare(clickedButton);
  };

  this.correctGuess = function(){
    self.view.updateScore( self.currentScore() );
  };

  this.wrongGuess = function(){
    self.gameOver();
  };

  this.gameOver = function(){
    self.view.gameOver();
    self.bindModalListeners();
  };

  this.restartGame = function(){
    self.view.restart();
    self.game.restart();
    self.beginSimonsTurn();
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