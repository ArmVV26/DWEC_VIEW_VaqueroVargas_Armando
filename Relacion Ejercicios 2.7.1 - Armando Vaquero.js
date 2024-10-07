/*
    Exercise 1. Check if a number is odd or even
*/

let numero = 10; // 11

if((numero % 2) == 0){
  console.log("Es par");
}else{
  console.log("Es impar");
}

/*
    Exercise 2. Check if input variable is a number or not
*/

let variablePrueba = "a"; // 2

if (typeof(variablePrueba) == 'number') {
  console.log('La variable es un numero');
} else {
  console.log('No es un numero');
}


/*
    Exercise 3. Find the largest of two number
*/

let numeroUno = 20;
let numeroDos = 30;

if (numeroUno > numeroDos){
  console.log("El primer numero (",numeroUno,") es mayor que el segundo numero (",numeroDos,")");
}else{
  if(numeroUno < numeroDos){
    console.log("El primer numero (",numeroUno,") es menor que el segundo numero (",numeroDos,")");
  }else{
    console.log("Los numeros son iguales");
  }
}

/*
    Exercise 4. Find the largest of three number
*/

let x = 5;
let y = 5;
let z = 10;

if (x == y && x == z && y == z){
  console.log("Todos los numeros son iguales");
}else{
  if(x > y && x > z){
    console.log("El numero ",x," es el mayor");
  }else{
    if(y > z){
      console.log("El numero ",y," es el mayor");
    }else{
      console.log("El numero ",z," es el mayor");
    }
  }
}

/*
    Exercise 5. Check if a triangle is equilateral (all side equal), scalene (all side unequal), or isosceles (2
                sides are equals)
*/

let ladoX = 5;
let ladoY = 4;
let ladoZ = 2;

if ( ladoX == ladoY && ladoX == ladoZ ) {
	console.log("El triangulo es Equilatero");
}else if ( ladoX == ladoY || ladoX == ladoZ || ladoY == ladoZ ) {
  console.log("El triangulo es Isoceles");  
}else{
  console.log("El triangulo es Escaleno");
}

/*
    Exercise 6. Find the a number is present in given range (provide start, end and number to be found)
*/

let rangoX = 5;
let rangoY = 20;
let numBuscar = 15;

let numIntento = prompt(`Indica un numero comprendido entre ${rangoX} y ${rangoY}: `);

if ( numIntento < rangoX || numIntento > rangoY ) {
  console.log("El numero es invalido");
}else if ( numIntento == numBuscar ) {
  console.log("Has Acertado!");
}else{
  console.log("Has fallado");
}

/*
    Exercise 7. Check if a year is leap year or not. A leap year is 1.- divisible by 400 OR 2.- divisible by 4
                and not by 100
*/

let anyo = 2014;

if ( (anyo%400) == 0 ) {
  console.log(`El año ${anyo} es bisiesto`);
}else if ( (anyo%4) == 0 && (anyo%100) != 0 ) {
  console.log(`El año ${anyo} es bisiesto`);
}else{
  console.log(`El año ${anyo} no es bisiesto`);
}

/*
    Exercise 8. Rewrite the former if by using the ternary operator
*/

anyo%400 == 0 ? `El año ${anyo} es bisiesto` :
(anyo%4 == 0 && anyo%100 !== 0) ? `El año ${anyo} es bisiesto` : `El año ${anyo} no es bisiesto`;

/*
    Exercise 9. Show the number of days in a given month
*/

let mes = 12;

if (mes === 1) {
  console.log(`El mes ${mes} tiene 31 dias`);
} else if (mes === 3) {
  console.log(`El mes ${mes} tiene 31 dias`);
} else if (mes === 5) {
  console.log(`El mes ${mes} tiene 31 dias`);
} else if (mes === 7) {
  console.log(`El mes ${mes} tiene 31 dias`);
} else if (mes === 8) {
  console.log(`El mes ${mes} tiene 31 dias`);
} else if (mes === 10) {
  console.log(`El mes ${mes} tiene 31 dias`);
} else if (mes === 12) {
  console.log(`El mes ${mes} tiene 31 dias`);
} else if (mes === 4) {
  console.log(`El mes ${mes} tiene 30 dias`);
} else if (mes === 6) {
  console.log(`El mes ${mes} tiene 30 dias`);
} else if (mes === 9) {
  console.log(`El mes ${mes} tiene 30 dias`);
} else if (mes === 11) {
  console.log(`El mes ${mes} tiene 30 dias`);
} else if (mes === 2) {
  console.log(`El mes ${mes} tiene 28 o 29 dias si el año fuese bisiesto`);
} else {
  console.log(`Ese mes no existe`);
}

/*
    Exercise 10. Rewrite the former if by using a switch statement
*/

switch (mes){
  case 1,3,5,7,8,10,12:
    console.log(`El mes ${mes} tiene 31 dias`);
    break;
  case 4,6,9,11:
    console.log(`El mes ${mes} tiene 30 dias`);
    break;
  case 2:
    console.log(`El mes ${mes} tiene 28 o 29 dias si el año fuese bisiesto`);
    break;
  default:
    console.log(`Ese mes no existe`);
    break;
}

/*
    Exercise 11. Rewrite the former if by using && and || operators
*/

if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) {
  console.log(`El mes ${mes} tiene 31 dias`);
} else if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
  console.log(`El mes ${mes} tiene 30 dias`);
} else if (mes === 2) {
  console.log(`El mes ${mes} tiene 28 o 29 dias si el año fuese bisiesto`);
} else {
  console.log(`Ese mes no existe`);
}

/*
    Exercise 12. Will alert be shown?
*/

if ("0") {
    alert( 'Hello' );
}

// Si se mostrara la aletar porque al no ser una cadena vacia, el if la toma como un valor true

/*
    Exercise 13. Rewrite the following code to optimize it (do not use switch). Rewrite again the following
                code by using a switch statement
*/
let a = +prompt('a?', '');
if (a == 0) {
    alert( 0 );
}
if (a == 1) {
    alert( 1 );
}
if (a == 2 || a == 3) {
    alert( '2,3' );
}

// Optimizado
a == 0 ? alert(0) : 
a == 1 ? alert(1) :
(a == 2 || a == 3) ? alert('2,3') : "Nada";

// Con Switch
switch (a) {
  case '0':
    alert(0);
    break;
  case '1':
    alert(1);
    break;
  case '2','3':
    alert('2,3');
    break
}