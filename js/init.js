(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space


/*global variables for control the state of calculator*/
x="0";
xi=1;
point=0;
ni=0;

function clean() {
  $( '#result' ).empty();
  x="0";
  xi=1;
  point=0;
  ni=0;
}

function addScreen(value) {
  if (x=="0" || x == '-' || xi==1  ) {
    if (x == '-') {
      $( '#result' ).append(value);
      x+=value;
    }else {
      $( '#result' ).append(value);
      x=value;
      if (value==".") {
        $( '#result' ).empty();
        $( '#result' ).append('0.');
        x=value;
        point=1;
      }
    }
  } else {
      if (value=="." && point==0) {
        $( '#result' ).append(value);
        x+=value;
        point=1;
      } else if (value=="." && point==1) {

      } else {
          $( '#result' ).append(value);
           x+=value;
         }
    }
    xi=0;
}

function operar(s) {
  if (s == '-' && x == "0") {
    x= s;
    $( '#result' ).append(s);
  } else {
    ni=x;
    op=s;
    $( '#result' ).empty();
    x="0";
    xi=1;
  }
}
function makeOperation() {
      sl=ni+op+x;
      console.debug('cadena a operar' + sl)
      sol=eval(sl);
      $( '#result' ).empty();
      $( '#result' ).append(sol);
      x=sol;
      op="no";
      xi=1;
}
