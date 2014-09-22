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
      } else {
        document.dispatchEvent( new Event("sequenceDisplayFinished") );
      }
    }, 1000);
    this.timeoutIDs.push(timeoutID);

  },

  restart: function(){
    this.scoreHolder.text(0);
    this.clearTimeouts();
    this.removeModal();
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
  },

  gameOver: function(){
    this.resetModalClasses();
    $('.modal').show();
    $('.modal').addClass('animated fadeInDownBig');
  },

  removeModal: function(){
    this.resetModalClasses();
    $('.modal').addClass('animated fadeOutDownBig');
    $('.modal').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', this.hideModal);
  },

  hideModal: function(){
    $('.modal').hide();
  },

  resetModalClasses: function(){
    $('.modal').removeClass('animated');
    $('.modal').removeClass('fadeInDownBig');
    $('.modal').removeClass('fadeOutDownBig');
  },

  simonsTurn: function(){
    this.resetCurrentPlayerClasses();
    $('[data-role="current-player"]').hide();
    $('[data-role="current-player"]').text('My');
    $('[data-role="current-player"]').addClass('animated fadeIn');
    $('[data-role="current-player"]').show();
  },

  playersTurn: function(){
    this.resetCurrentPlayerClasses();
    $('[data-role="current-player"]').hide();
    $('[data-role="current-player"]').text('Your');
    $('[data-role="current-player"]').addClass('animated fadeIn');
    $('[data-role="current-player"]').show();
  },

  resetCurrentPlayerClasses: function(){
    $('[data-role="current-player"]').removeClass('animated');
    $('[data-role="current-player"]').removeClass('fadeIn');
  }
};