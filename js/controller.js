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
    var clickedButton = parseInt(e.target.dataset.gameButton);
    self.game.checkGuess(clickedButton);
    self.view.lightSquare(clickedButton);
  };

  this.correctGuess = function(){
    console.log("YOU GUESSED CORRECTLY");
  };

  this.wrongGuess = function(){
    console.log("YOU GUESSED WRONG");
    self.restartGame();
  };

  this.restartGame = function(){
    self.game.restart();
    self.view.restart();
    self.executeTurn();
  }


};

// Simon.Controller.prototype = {
//   executeTurn: function() {
//     // turn off listeners for clicks?
//     // tell game to start turn
//     this.game.startTurn();
//     // tell view to show the sequence, taking the game as an argument?
//     this.view.showSequence(this.game);
//     // turn listeners on for the clicks/have some checker for a click.
//   },

//   bindListeners: function(){
//     document.querySelector('.board').addEventListener('click', this.buttonClicked.bind(this));
//     document.addEventListener('correct', this.correctGuess.bind(this));
//     document.addEventListener('wrong', this.wrongGuess.bind(this));
//   },

//   buttonClicked: function(e){
//     var clickedButton = parseInt(e.target.dataset.gameButton);
//     this.game.checkGuess(clickedButton);
//   },

//   wrongGuess: function(){
//     console.log("YOU GUESSED WRONG");
//   },

//   correctGuess: function(){
//     console.log("YOU GUESSED CORRECTLY");
//     this.game.
//   }
// };