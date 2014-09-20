var Simon = Simon || {};

Simon.View = function() {
  this.scoreHolder = $('[data-score]');
  this.timeoutIDs = [];
};

Simon.View.prototype = {
  showSequence: function(game) {
    var sequence = game.sequence;
    this.showNextInSequence(sequence, 0);
  },

  lightSquare: function(squareNumber){
    $('[data-game-button='+squareNumber+']').addClass('active-button-'+squareNumber);
    console.log(squareNumber);

    var timeoutID = window.setTimeout( function() {
      $('[data-game-button='+squareNumber+']').removeClass('active-button-'+squareNumber);
    }, 500);
    this.timeoutIDs.push(timeoutID);
  },

  showNextInSequence: function(sequence, index) {
    var self = this;
    var timeoutID = window.setTimeout( function() {
      self.lightSquare(sequence[index]);
      if(sequence.length > index + 1){
        self.showNextInSequence(sequence, index + 1);
      }
    }, 1000);
    this.timeoutIDs.push(timeoutID);
  },

  restart: function(){
    this.scoreHolder.text(0);
    this.clearTimeouts();
  },

  updateScore: function(newScore){
    this.scoreHolder.text( newScore );
  },

  clearTimeouts: function(){
    for(var i=0, length = this.timeoutIDs.length; i<length; i++){
      nextTimeout = this.timeoutIDs[i];
      window.clearTimeout(nextTimeout);
      nextTimeout = null;
    }
    this.timeoutIDs = [];
  }
};