(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

x="0"; //número en pantalla
xi=1; //iniciar número en pantalla: 1=si; 0=no;
point=0; //estado coma decimal 0=no, 1=si;
ni=0; //número oculto o en espera.

function clean() {
  $( '#result' ).empty();
  x="0"; //número en pantalla
  xi=1; //iniciar número en pantalla: 1=si; 0=no;
  point=0; //estado coma decimal 0=no, 1=si;
  ni=0;
}

function addScreen(value) {
  console.debug('addScreen antes valor de x:' + x)

  if (x=="0" || x == '-' || xi==1  ) {	// inicializar un número,
    if (x == '-') {
      $( '#result' ).append(value); //mostrar en pantalla
      x+=value; //save Number
    }else {
      $( '#result' ).append(value); //mostrar en pantalla
      x=value; //save Number
      if (value==".") { //user write point that means is decimal number
        $( '#result' ).empty();
        $( '#result' ).append('0.');
        //pantalla.innerHTML="0."; //escribimos 0.
        x=value; //save Number
        point=1; //cambiar estado de la coma
      }

    }


  } else { //continuar escribiendo un número
      if (value=="." && point==0) { //si escribimos una coma decimal pòr primera vez
        //pantalla.innerHTML+=xx;
        $( '#result' ).append(value);
        x+=value; //save number after point
        point=1; //cambiar el estado de la coma
      } else if (value=="." && point==1) {}//si intentamos escribir una segunda coma decimal no realiza ninguna acción.

         //Resto de casos: escribir un número del 0 al 9:
         else {
             //pantalla.innerHTML+=xx;
              $( '#result' ).append(value);
             x+=value
         }

    }
    console.debug('addScreen despues valor de x:' + x)
      xi=0 //el número está iniciado y podemos ampliarlo.
}

function operar(s) {
  var sNeg = 0;
  var nextNumber = 0;
  console.debug(s)
  console.debug(s == '-' && ni == 0 )

  if (s == '-' && x == "0") {
    console.debug('entro ....')
    x= s;
    $( '#result' ).append(s);
    sNeg = 1;
    console.debug('Operar valor de x:' + x +' valor de sNeg:'+ sNeg)
  } else {
    console.debug('entramos al else' + x)
    //igualar() //si hay operaciones pendientes se realizan primero
    ni=x //ponemos el 1º número en "numero en espera" para poder escribir el segundo.
    console.debug('Numero en espera:' + ni)
    op=s; //guardamos tipo de operación.
    console.debug('tipo de operacion' + op)
    $( '#result' ).empty();
    x="0";
    xi=1; //inicializar pantalla.
    console.debug(ni +'..... '+op)
    sNeg = 0;
  }
}
function makeOperation() {
      sl=ni+op+x; // escribimos la operación en una cadena
      console.debug('cadena a operar' + sl)
      sol=eval(sl) //convertimos la cadena a código y resolvemos
      $( '#result' ).empty();
      $( '#result' ).append(sol);
      x=sol; //guardamos la solución
      op="no"; //ya no hay operaciones pendientes
      xi=1; //se puede reiniciar la pantalla.
}
