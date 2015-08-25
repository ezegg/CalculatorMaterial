(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space


/*Varibles goblals for control the state of calculator*/
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
    $( '#result' ).append(value);
    x+=value;
    if (value==".") {
      $( '#result' ).empty();
      $( '#result' ).append('0.');
      x=value;
      point=1;
    }
  } else {
      if (value=='.' && point==0) {
        $( '#result' ).append(value);
        x+=value; //save number after point
        point=1; //change state point
      } else if (value=='.' && point==1) {}
         else {
              $( '#result' ).append(value);
             x+=value
         }
    }
    xi=0 //Change State for start number on screen.
}

function operar(s) {
  var sNeg = 0;
  if (s == '-' && sNeg == 0) {// neccesary for know if the firts time is nomber with '-'
    x= s;
    $( '#result' ).append(s);
    sNeg = 1;
  } else {
    ni=x //we need save the firts numer
    op=s; //we need save type operation.
    $( '#result' ).empty();
    x="0";
    xi=1;
    sNeg = 1;
  }
}
function makeOperation() {
      sl=ni+op+x; // save the operation in to string
      sol=eval(sl)
      $( '#result' ).empty();
      $( '#result' ).append(sol);
      x=sol;
      op="no";
      xi=1;
}
