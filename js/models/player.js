'use strict';

define( [ '../services/drawer', '../services/score' ], function ( Drawer, Score ) {
  function Player( number, section ) {
    this.number = number;
    this.section = section;
  }

  Player.prototype.step = function ( coordinate ) {
    Drawer.drawX( coordinate );
    Score.updateScoreTable( coordinate, this.number );
  }

  return Player;

} );
