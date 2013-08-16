
MoleculeGame = function ( ) {
    'use strict';
    Game.apply (this, arguments);
    var gameScreen = new GameScreen ( );
    var menuScreen = new MenuScreen ( );
    var scoreScreen = new HighScoreScreen ( );
    var loginScreen = new LoginScreen ( );

    this.addScreen ('game', gameScreen);
    this.addScreen ('menu', menuScreen);
    this.addScreen ('score', scoreScreen);
    this.addScreen ('login', loginScreen);

    this.init ('menu');
};

MoleculeGame.prototype = Object.create (Game.prototype);
MoleculeGame.prototype.constructor = MoleculeGame;

MoleculeGame.prototype.update = function (delta) {
    'use strict';
    this.getCurrentScreen ( ).onUpdate (delta);
};

MoleculeGame.prototype.buttonLogic = function (button) {
    'use strict';
    var screenID = this.getCurrentScreen ( ).buttonLogic (button);
    if (this.hasScreen (screenID)) {
        this.swapScreens (screenID);
    }
};
