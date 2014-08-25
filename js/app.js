$( document ).ready( function() {
  Simon.game = new Simon.Game();
  opts = {
    game: Simon.game
  }
  Simon.controller = new Simon.Controller(opts);
});