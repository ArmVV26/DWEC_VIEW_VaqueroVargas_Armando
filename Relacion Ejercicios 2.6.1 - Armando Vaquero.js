/*
    Exercise 1.- What are the final values of all variables a, b, c and d after the code below?
*/

let a = 1, b= 1;

let c = ++a; // This variable will take the value 2, as it increases the variable a by 1
let d = b++; // This variable will take the value 1, as it increases after, not before


/*
    Exercise 2.- What are the values of y and x after the code below?
*/

let y = 2; 
let x = 1 + (y *= 2);

// The y value will take twice its value (4), because in the statement of x it is multiplied and equals a value of 2.
// The x value will take 5

/*
    Exercise 3.- What are the results of these expressions?
*/

5 > 4                   // True, because 5 is greater than 4
"apple" > "pineapple"   // False, because alphabetically a is less than p
"2" > "12"              // True, because alphabetically 2 is greater than 1
undefined == null       // True, because they have similar value
undefined === null      // False, because they arent strictly the same
null == "\n0\n"         // False, because null is only equals to undefined
null === +"\n0\n"       // False, because the arent strictly the same
"" + 1 + 0              // This will act like a String and all will be added together giving 10
"" - 1 + 0              // This will act like a normal calculation giving -1
true + false            // This will do a calculation between true (value = 1) and flase (value = 0) resulting 1
6 / "3"                 // This will result in 2, because an operation symbol in front of a string turns it into a number
"2" * "3"               // This will act in the same way as the previous one, resulting in 6
4 + 5 + "px"            // The firt thing it will do is add 4 + 5 and then it will add the string "px". The result is 9px
"$" + 4 + 5             // In this case will not do a calculation, but it will act as a string giving $45 as result
"4" - 2                 // This will act as in the previous cases. The string will act as a normal number. The result is 2
"4px" - 2               // In this case the result will be NaN, because the operation cant return a number.
" -9 " + 5              // This will act like a string, and give as a result -9 5
" -9 " - 5              // But in this case if you change + to a -, this will act like a calculation. The result is -14
null + 1                // This will act like null is a 0, giving as a result 1 
undefined + 1           // In this case undefined will not add as 0, giving as a result NaN
" \t \n" - 2            // In this case the string is full of space, and its converted to 0. The result is -2

/*
    Exercise 4.- Here’s a code that asks the user for two numbers and shows their sum. It works incorrectly.
        The output in the example below is 12 (for default prompt values). Why? Fix it. The result should be 3.
*/

let q = Number(prompt("First number?", 1));
let w = Number(prompt("Second number?", 2));
alert(q + w); // 12

// Adding "Number" between parenthesis in the value of the two variables, we make them change from string to number.
// Therefore the calculation will be done correctly.