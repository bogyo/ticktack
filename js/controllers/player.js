define( [ '../services/board', '../services/message', 'utils/index' ],
  function ( Board, Message, Utils ) {
    'use strict';

    var Constant = Utils.Constant,
      Transform = Utils.Transform,
      player;

    function setPlayer( value ) {
      player = value;
    }

    function getPlayer() {
      return player;
    }

    function checkForSavedPlayer() {
      return JSON.parse( localStorage.getItem( 'tickTackToeGame-Player' ) );
    }

    function checkForLastStep() {
      return JSON.parse( localStorage.getItem( 'tickTackToeGame-Step' ) );
    }

    function addFirstPlayer( ai ) {
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
        Message.show( Transform.PlayerNumberToSign( getPlayer() ) + Constant.playerMessage.nextPlayer );
      } else {
        first = Math.floor( Math.random() * 2 ) + 1;
        setPlayer( first );
        localStorage.setItem( 'tickTackToeGame-Player', getPlayer() );
        Message.show( Transform.PlayerNumberToSign( getPlayer() ) + Constant.playerMessage.firstPlayer );
        ai.prepareStart( getPlayer() );
      }
    }

    function changePlayer() {
      var currentPlayer = getPlayer();
      return currentPlayer === 1 ? setPlayer( 2 ) : setPlayer( 1 );
    }

    player = checkForSavedPlayer();

    return {
      setPlayer: setPlayer,
      getPlayer: getPlayer,
      addFirstPlayer: addFirstPlayer,
      changePlayer: changePlayer
    };
  } );
