(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

function clean() {
  $( '#result' ).empty();
}

function addScreen(value) {
  var model = $('#result');
  //model.empty();
  model.append(value);
}
