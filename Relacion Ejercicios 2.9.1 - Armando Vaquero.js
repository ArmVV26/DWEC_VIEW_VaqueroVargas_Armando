/*
    Exercise 1. Take loop exercises from 4 until the last one and rewrite them by using functions
*/

// EXERCISE 4
function ParImparSuma() {
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
}

// EXERCISE 5
function NumPrimos(){
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
}

// EXERCISE 6
function NumPrimosPares(){
    let numero = prompt("Dime un numero");

    let primos = []; // Array donde voy a guardar los numeros primos

    let primosIndex = 0;

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
}

// EXERCISE 7
function ArrayRandom(){
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

}

// EXERCISE 8
function fraseBack(){
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
}

// EXERCISE 9
function Isoceles(){
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
}

// EXERCISE 10
function Factorial(){
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
}

// EXERCISE 11
function palindromo(){
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
}

// EXERCISE 12
function AcertarCodigo(){
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
}

/*
    Exercise 2. Write a function that returns the square of a number
*/

// Pido un numero
let num = prompt("Indicame un numero");

// Muestro por pantalla el numero y llamo a la funcion para que me haga el cuadrado del numero
console.log(`El cuadrado del numero ${num} es: ${cuadrado(num)}`);

// Funcion que devuelve el cuadrado de un numero
function cuadrado(num){
	return num*num;
}

/*
    Exercise 3. Write a function min(a,b) which returns the least of two numbers a and b.
*/

// Declaro los dos numeros
let numA = 10;
let numB = 11;

// Muestro por pantalla los dos numeros y llamo a la funcion que me muestra el minimo
console.log(`El numero mas pequeño de ${numA} y ${numB} es: ${minimo(numA,numB)}`);

// Funcion que comprueba que valor es el minimo y devuelve el correcto. Si son iguales tambien lo dice
function minimo(numA,numB){
	if (numA == numB) {
    	return "Son iguales";
    }else{
      	if (numA < numB) {
        	return numA;
        }else{
    		return numB;
        }
    } 
}

/*
    Exercise 4. Rewrite min function as an expression function
*/

let minimo = function(numA,numB){
	if (numA == numB) {
    	return "Son iguales";
    }else{
      	if (numA < numB) {
        	return numA;
        }else{
    		return numB;
        }
    } 
}

/*
    Exercise 5. Rewrite min function as an arrow function
*/

let minimo = (numA,numB) =>{
	if (numA == numB) {
    	return "Son iguales";
    }else{
      	if (numA < numB) {
        	return numA;
        }else{
    		return numB;
        }
    } 
}

/*
    Exercise 6. Write a function pow(x,n) that returns x in power n. Ask the user fot both numbers.
*/

// Pregunto el valor del numero y de la potencia 
let numX = prompt("Indica un numero");
let numN = prompt("Indica una potencia ");

// Creo la funcion que ejecuta un bucle que multiplica el valor de la variable en funcion de la potencia
function pow(numX,numN) {
  	let resultado = 1;
	
  	for (let i = 0; i<numN; i++){
    	resultado *= numX;
    } 
  
  	return resultado;
}

// Muestro por pantalla el numero, la potencia y el resultado que devuelve la funcion
console.log(`El numero ${numX} elevado a la potencia ${numN}, da como resultado: ${pow(numX,numN)}`);

/*
    Exercise 7. Rewrite pow function as an expression function
*/

let pow = function(numX,numN) {
    let resultado = 1;
  
    for (let i = 0; i<numN; i++){
      resultado *= numX;
  } 

    return resultado;
}

/*
    Exercise 8. Rewrite pow function as an arrow function
*/

let pow = (numX,numN) => {
    let resultado = 1;
  
    for (let i = 0; i<numN; i++){
      resultado *= numX;
  } 

    return resultado;
}

/*
    Exercise 9. Replace Function Expressions with arrow functions in the code below:
*/

function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
   }
   ask(
    "Do you agree?",
    () => { alert("You agreed."); },
    () => { alert("You canceled the execution."); }
   );

/*
    Exercise 10. Write a function named calculateSupply that:
        a) takes 2 arguments: age, amount per day.
        b) calculates the amount consumed for rest of the life (based on a constant max age).
        c) outputs the result to the screen like so: "You will need NN to last you until the ripe old
           age of X"
        Express it as an arrow function, if possible
*/

// Declaro la funcion como una variable con flecha, y calcula la cantidad consumida 
let calculateSupply = (age, amDay) => {
	const maxAge = 84;
  	let consume = (maxAge - age) * amDay;
	console.log(`You will need ${consume} to last you until the ripe old ${maxAge}`)
}

calculateSupply(23,4);

/*
    Exercise 11. Create a function that greets the user by his name and with a message according to the
                 moment of the day (morning, afternoon, night). It accepts two parameters: user name and a
                 callback function.
*/

// Creo la funcion saludar que devolvera el texto que saluda al usuario.
// Para la funcion callback hago la llamada a la funcion momento, donde defino que muestro
function saludar(usuario, callback) {
	console.log(`Hola ${usuario}, ${callback(momento)}`)
}

// En esta funcion lo que hago es saber que hora es actualmente y en funcion de la hora muestro una cosa u otra
function momento() {
  let hora = new Date().getHours();
  
  if(hora < 13) {
  	return "Buenos Dias!";
  }else if (hora < 19) {
  	return "Buenas Tardes!";
  }else {
  	return "Buenas Noches!";
  }
}

// Para llamar a la funcion saludar es necesario pasar un texto (nombre) y el nombre de la funcion que se va a ejecutar
saludar("Armando", momento)


/*
    Exercise 12. Create a function that accepts three parameters: two numbers and the mathematical
                 operation to be performed with these numbers. The following mathematical operations must       
                 be supported: addition, subtraction, division and multiplication. Use callback functions
*/

// Creo una funcion que recoge los dos numeros y llama a las funciones para hacer los calculos
function calcular(numeroUno, numeroDos, callback) {
	console.log(`Calculo entre ${numeroUno} y ${numeroDos}, es: ${callback(numeroUno, numeroDos)}`)
}

function sumar(numeroUno, numeroDos) {
  return `Suma: ${numeroUno + numeroDos}`;
}

function restar(numeroUno, numeroDos) {
  return `Resta: ${numeroUno - numeroDos}`;
}

function multiplicar(numeroUno, numeroDos) {
  return `Multiplicacion: ${numeroUno * numeroDos}`;
}

function dividir(numeroUno, numeroDos) {
  if (numeroDos == 0) {
  	return "Error no se puede hacer la operacion";
  }else{
  	return `Division: ${numeroUno / numeroDos}`;
  }
}

calcular(2, 3, sumar);
calcular(4, 5, restar);
calcular(6, 7, multiplicar);
calcular(8, 9, dividir);