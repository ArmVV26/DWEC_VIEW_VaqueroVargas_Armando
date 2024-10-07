/*
    Exercise 1. What is the last value output by this code? Why?
*/

let i = 3;
while (i) {
Console.log( i-- );
}

// El ultimo numero será el 1 por que cuando llegue al 0 se traducira como false y while parará

/*
    Exercise 2. Rewrite the following code changing the for loop to while without altering its behavior
                (the output should stay same).
*/

for (let i = 0; i < 3; i++) {
    Console.log ( `number ${i}!` );
}

let x = 0;
while (x < 3){
	console.log(`number ${x++}!`);
}

/*
    Exercise 3. Write a loop which keeps prompting for a number until it is greater than 100 or enters an
                empty line.
*/

let fin = false;

do{
	let num = prompt("Introduce un numero: ");
	if (num > 100 || num == "" || num == null){ // Comparo cuando el numero es mayor a 100, le doy al escape (null) o al intro (cadena vacia)
    	fin = true;
    }
}while (!fin);

/*
    Exercise 4. Using while loop, create two arrays: one with even numbers and another one with odds
                numbers. Both of them from 1 to n, being n a number provided by user. Using a for loop,
                create a third array whose nth number is the sum of nth number of both arrays.
*/

let size = prompt("Dime un numero para el tamaño de los arrays");

// Declaro los arrays sin darle ningun valor
let arrayPar = []; 
let arrayImpar = [];
let arraySuma = [];

// Declaro la posicion donde se va a guardar el numero en la array
let parIndex = 0;
let imparIndex = 0;

while (size != 0){
	if(size%2 == 0){ // Compruebo si el numero es par o impar
    	arrayPar[parIndex] = size; // Lo añado a su array correspondiente
    	parIndex++;
    }else{
    	arrayImpar[imparIndex] = size;
      	imparIndex++;
    }
  size--;
}

for (let i=0; i<arrayPar.length; i++){
  	let suma = Number(arrayPar[i]) + Number(arrayImpar[i]); // Sumo los dos valores de los dos arrays
  	arraySuma[i] = suma; // Lo guardo en la otra array que habia creado
}

// Muestro por pantalla los arrays
console.log("Numeros Pares: ", arrayPar);
console.log("Numeros Impares: ", arrayImpar);
console.log("Suma de Pares e Impares: ", arraySuma);

/*
    Exercise 5. Write code which outputs prime numbers from 1 to n, being the latter a numbrer
                provided by user.
*/

let numero = prompt("Dime un numero");

let primos = []; // Array donde voy a guardar los numeros primos

let primosIndex = 0;

for (let i=0; i<numero; i++){ // Recorro todos los numeros desde el que doy hasta el 1

  	let divisores = 0; // Variable que va a guardar todos los divisores del numero
	 
    for (let x=0; x<numero; x++){ // Recorro todos lo numeros desde i hasta el 1
    	if(i%x == 0){   // Divido el numero i entre todos los numeros entre el y 1, si es divisor se suma uno sino continua
        	divisores++;
        }
    }

  	if (divisores == 2){ // Si el numero de divisores es 2, es primo
    	primos[primosIndex] = i; // Lo añado al array
      	primosIndex++;
    }
}

// Muestro por pantalla el array que contiene los numeros primos
console.log("Numeros Primos desde 1 hasta ", numero,":", primos);

/*
    Exercise 6. Take odd numbers array and remove the prime numbers from it. Tip: as we have not
                seen array methods yet, the only way is to create a new array without those numbers
*/

for (let i=0; i<numero; i++){
  	let divisores = 0;
	for (let x=0; x<numero; x++){
    	if(i%x == 0){
        	divisores++;
        }
    }
  
  	if (divisores == 2){
      if(i%2 == 0){
    	primos[primosIndex] = i;
        primosIndex++;
      }
   	}
}

// Muestro por pantalla el array que contiene los numeros primos pares
console.log("Numeros Primos desde 1 hasta ", numero," pares son:", primos);


/*
    Exercise 7. Ask the user for a number n. Create an array of n random numbers and print the highest
                one. Use the following code to generate a random number between 0 and 9999
*/

let numeroN = prompt("Dime un numero");

// Creo el array que voy a rellenar usando la posicion
let arrayNum = [];
let index = 0;

// Hago un bucle que se repita n veces y genere numeros que se añadiran al array que he creado
for (let i=0; i<numeroN; i++){
	let random = Math.floor(Math.random() * 9999);
	arrayNum[index] = random;
    index++;
}

// Creo una variable, y con un bucle compruebo si el numero que guarda es mayor que los valores del array
let numeroMayor = 0;

for (let num of arrayNum){
	 if (numeroMayor < num){
     	numeroMayor = num;
     }
}

// Muestro por pantalla el array y el valor maximo
console.log("El array con valores random es: ", arrayNum);
console.log("El numero mas grande es: ", numeroMayor);

/*
    Exercise 8. Ask the user for a string and print it reversed
*/

let frase = prompt("Dime una frase");

// En esta variable voy a guardar la frase al reves
let fraseBack = "";

// Hago un bucle que va desde la longitud de la cadena - 1, hasta 0. Guardando cada letra en la variable de antes
for (let i = frase.length-1; i>=0; i--) {
	fraseBack += frase[i];
}

// Muestro por pantalla la frase original y al reves
console.log("La frase es: ", frase);
console.log("La frase al reves es: ", fraseBack);

/*
    Exercise 9. Ask the user for a number. Print a isosceles triangle made of asterisks with as many
                levels as the number the user entered.
*/

// Pido un numero
let nLineas = prompt("Indicame un numero");

// Hago un bucle que haga n iteracciones
for (let i = 1; i<nLineas; i++) {
	
    // Variable donde voy a guardar la linea
  	let lineas = "";
	
    // Le doy n - i espacios a la linea
  	for (let x=0; x<(nLineas-i); x++) {
      	lineas += "ꚲ";
    }
	  
    // Le añado 2*i-1 asteriscos a la linea
  	for (let y = 1; y<=(2*i-1); y++){
    	lineas += "*";
    }
 	
    // Muestro la linea
  	console.log(lineas);
}

/*
    Exercise 10. Ask the user for a number between 3 and 25. Calculate its factorial.
*/

// Recojo el numero que me indique el usuario
let numeroFac = prompt("Indicame un numero entre 3 y 25");

// Variable que contendra el factorial del numero
let factorial = 1;

// Compruebo que el numero entra en el rango indicado
if (numeroFac >= 3 && numeroFac <= 25) {
    // Multiplico cada numero hasta llegar al numero que ha dado el usuario
	for (let i = 1; i<=numeroFac; i++) {
    	factorial *= i;
    }
    // Muestro por pantalla el valor
  	console.log(`El factorial de ${numeroFac} es: ${factorial}`);
}else{
    console.log("Numero introducido erroneo");
}

/*
    Exercise 11. Ask the user for a string and write a program that checks if it is palindrome (it is spelled
                the same forward and backward).
*/

// Pido que introduzca una palabra
let palabra = prompt("Escribe una palabra");

// Variale que va a guardar la palabra al reves
let palabraBack = ""; 

// Hago que la palabra se ponga la reves
for (let i = palabra.length-1; i>=0; i--) {
	palabraBack += palabra[i];
}

// Compruebo si las palabras son las mismas. Si es asi es un palindromo si no, no.
if (palabra == palabraBack) {
	console.log(`La palabra ${palabra} es un palindromo`);
}else{
	console.log(`La palabra ${palabra} no es un palindromo`);
}

/*
    Exercise 12. Use the following code to generate a random pin number of 4 digits. Write code to allow
                a user to try to guess the number in 4 attempts
*/

// Genero el numero aletorio
let numeroAleatorio = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;

// Creo un contador para los intentos
let contador = 0;

// Un bucle para que pregunte 4 veces por el numero y si acierto esto acaba el bucle
while (contador != 4) {
	let opcion =  prompt(`Indica un numero de 4 cifras (Te quedan ${4-contador})`);
  	
  	if (opcion == numeroAleatorio) {
    	console.log("Has adivinado el codigo");
      	contador = 4;
    }else{
    	console.log("No has acertado, te quedan ",4-contador);
      	contador++;
    }
}