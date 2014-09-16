var Simon = Simon || {};

Simon.View = function() {
  this.scoreHolder = $('[data-score]');
};

Simon.View.prototype = {
  showSequence: function(game) {
    var sequence = game.sequence;
    this.showNextInSequence(sequence, 0);
  },

  lightSquare: function(squareNumber){
    $('[data-game-button='+squareNumber+']').addClass('active');
    console.log(squareNumber);
    window.setTimeout( function() {
      $('[data-game-button='+squareNumber+']').removeClass('active');
    }, 500);
  },

  showNextInSequence: function(sequence, index) {
    var self = this;
    window.setTimeout( function() {
      self.lightSquare(sequence[index]);
      if(sequence.length > index + 1){
        self.showNextInSequence(sequence, index + 1);
      }
    }, 1000);
  },

  restart: function(){
    this.scoreHolder.text(0);
  },

  updateScore: function(newScore){
    this.scoreHolder.text( newScore );
  }
};