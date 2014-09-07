var Simon = Simon || {};

Simon.View = function() {
};

Simon.View.prototype = {
  showSequence: function(game) {
    var lengthOfSequence = game.sequence.length;
    for (var i=0; i<lengthOfSequence; i++){
      var nextInSequence = game.sequence[i];
      this.showNextInSequence(nextInSequence);
    }
  },

  showNextInSequence: function(nextInSequence) {
    console.log(nextInSequence);
  },

  restart: function(){

  }
};