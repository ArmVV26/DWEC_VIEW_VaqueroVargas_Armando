/*
    Exercise 1. Explain each otuput of the following code
*/

console.log( null || 2 || undefined );  // Mostrara 2, porque el operador || muestra el primer valor verdadero
console.log( 1 && null && 2 );          // Mostrara null, porque el operador && muestra el primer valor falso
console.log( null || 2 && 3 || 4 );     // Primero se ejecuta el &&, devolviendo 3 porque es el ultimo valor que hay
                                        // y despues el operador || mostrara el primer valor verdadero que es el 3
let x = 3;                              
console.log((x < 5) && (x > 0));        // Mostrara True, porque 3 es menor que 5 y, a la vez, es mayor que 0
console.log((x < 5) && (x > 6));        // Mostrara false, porque 3 es menor que 5, pero no es mayor que 6
console.log((x > 2) || (x > 5));        // Mostrar true, porque 3 es mayor que 2 y como el operador usado es el Or solo es
                                        //  es necesario que una de las dos opcioens sea true.
console.log((x > 3) || (x < 0));        // Mostrara false, porque 3 no es ni mayor que 3, ni menor que 0
console.log(!(x == 3));                 // Mostrara false, porque 3 no es diferente de 3
console.log(!(x < 2));                  // Mostrara true, porque la comparacion saldria false, pero el simbolo ! cambia el resultado.

/*
    Exercise 2. Change the code inside console.log so output is true
*/

const numOne = 5;
const numTwo = 6;
console.log(numOne !== numTwo);

// Añado una negacion para que la igualdad sea True. El numero uno no es igual al numero dos

/*
    Exercise 3. Ask user for his age and check that it is not between 14 and 90 inclusively. Create two
                variants: the first one using NOT !, the second one – without it.
*/

let age = prompt("¿Que edad tienes?");

// Con NOT
if(!(age >= 14 && age <= 90)){
  console.log("No entra dentro");
}else{
    console.log("Entra dentro");
}

// Sin NOT
if(age <= 14 || age >= 90){
    console.log("No entra dentro");
}else{
    console.log("Entra dentro");
}

/*
    Exercise 4.- What is the code below going to output?
*/

alert( null || 2 || undefined );    // Va a mostar 2, porque el operador || muestra el primer valor verdadero
alert( alert(1) || 2 || alert(3) ); // Mostrara la alerta de 1, por que lo que devuleve es undefined, por lo que
                                    // despues muestra 2 que es el siguiente valor verdadero
alert( 1 && null && 2 );            // En este caso el valor que va a mostrar va a ser null, ya que el operador
                                    // && muestra el primer valor falso
alert( alert(1) && alert(2) );      // Primero muestra alerta 1 y despues undefined. Esto es porque el primer valor 
                                    // lee es alert 1 (mostrandolo) y como un alert es undefined muestra este
alert( null || 2 && 3 || 4 );       // Primero se ejecuta el operador && que elegira el valor 3 por que es el ultimo verdadero
                                    // despues, con el operador || muestra el primer valor verdadero que es 3

/*
    Exercise 5.- Check the range between. Write an if condition to check that age is between 14 and 90
                 inclusively. “Inclusively” means that age can reach the edges 14 or 90.
*/

let edad = 40;

if(edad >= 14 && edad <= 90){
    console.log("Entras dentro");
}else{
    console.log("No entras dentro");
}

/*
    Exercise 6.- Which of these alerts are going to execute?
*/

if (-1 || 0) alert( 'first' );          // Este se ejecuta, por que el -1 es true y por lo tanto entra dentro del if
if (-1 && 0) alert( 'second' );         // Este no se ejecuta, por que 0 no es true
if (null || -1 && 1) alert( 'third' );  // Este se ejecuta, por que primero se queda el 1 del && y como este es true entra dentro del if
