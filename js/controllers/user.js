define( [ '../services/drawer', '../services/score' ], function ( Drawer, Score ) {
  'use strict';

  function UserPlayer( number ) {
    this.number = number;
  }

  UserPlayer.prototype.step = function ( coordinate ) {
    Drawer.drawX( coordinate );
    Score.updateScoreTable( coordinate, this.number );
  };

  return UserPlayer;

} );
