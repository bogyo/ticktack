'use strict';

define( [ '../services/board', './message', '../services/score', '../models/ai' ], function ( Board, Message, Score ) {
  var player;

  function setPlayer( value ) {
    player = value;
  };

  function getPlayer() {
    return player;
  };

  function checkForSavedPlayer() {
    return JSON.parse( localStorage.getItem( 'tickTackToeGame-Player' ) );
  };

  function checkForLastStep() {
    return JSON.parse( localStorage.getItem( 'tickTackToeGame-Step' ) );
  };

  function addFirst( ai ) {
    var lastFirstPlayer = checkForSavedPlayer(),
      lastStep = checkForLastStep(),
      first;

    if ( lastFirstPlayer && lastStep ) {

      if ( lastFirstPlayer === 2 && lastStep % 2 === 0 || lastFirstPlayer === 1 && lastStep % 2 === 1 ) {
        first = 2;
      } else {
        first = 1;
      }
      setPlayer( first );
      ai.prepareStart( getPlayer() );
      Message.show( getPlayer() + '. jatekos folytathatja' );
    } else {
      first = Math.floor( Math.random() * ( 2 - 1 + 1 ) ) + 1; // ????? <1,2>
      setPlayer( first );
      localStorage.setItem( 'tickTackToeGame-Player', getPlayer() );
      Message.show( getPlayer() + '. jatekos kezd' );
      ai.prepareStart( getPlayer() );
    }
  };

  function changePlayer() {
    var currentPlayer = getPlayer();
    return currentPlayer === 1 ? setPlayer( 2 ) : setPlayer( 1 );
  };

  player = checkForSavedPlayer();

  return {
    setPlayer: setPlayer,
    getPlayer: getPlayer,
    addFirst: addFirst,
    changePlayer: changePlayer
  }
} );
