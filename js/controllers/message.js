define( function () {
  var placeOfMessages = document.getElementById( 'message' );

  function show( message ) {
    document.getElementById( 'message' ).innerHTML = message;
  }

  function remove( message ) {
    document.getElementById( 'message' ).innerHTML = '';
  }

  return {
    show: show,
    remove: remove
  }

} );
