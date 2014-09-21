 $( document ).ready( function() {
  Simon.game = new Simon.Game();
  Simon.view = new Simon.View();

  opts = {
    game: Simon.game,
    view: Simon.view
  };

  Simon.controller = new Simon.Controller(opts);
  Simon.controller.bindListeners();
  Simon.controller.beginSimonsTurn();
});