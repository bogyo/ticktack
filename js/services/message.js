define( function () {
  'use strict';
  
  function show( message ) {
    document.getElementById( 'message' ).innerHTML = message;
  }

  function remove( ) {
    document.getElementById( 'message' ).innerHTML = '';
  }

  return {
    show: show,
    remove: remove
  };
} );
