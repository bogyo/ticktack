'use strict';
define( [ './board', './drawer', './score', './guide' ], function ( Board, Drawer, Score, Guide ) {

  return {
    Board: Board,
    Drawer: Drawer,
    Score: Score,
    Guide: Guide
  }
} );
