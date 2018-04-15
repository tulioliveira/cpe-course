## Day 0: Hello, World!

```javascript
/**
*   A line of code that prints "Hello, World!" on a new line is provided in the editor. 
*   Write a second line of code that prints the contents of 'parameterVariable' on a new line.
*
*	Parameter:
*   parameterVariable - A string of text.
**/
function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    console.log('Hello, World!');

    // Write a line of code that prints parameterVariable to stdout using console.log:
    console.log(parameterVariable);
    
}
```

## Day 0: Data Types
```javascript
/**
*   The variables 'firstInteger', 'firstDecimal', and 'firstString' are declared for you -- do not modify them.
*   Print three lines:
*   1. The sum of 'firstInteger' and the Number representation of 'secondInteger'.
*   2. The sum of 'firstDecimal' and the Number representation of 'secondDecimal'.
*   3. The concatenation of 'firstString' and 'secondString' ('firstString' must be first).
*
*	Parameter(s):
*   secondInteger - The string representation of an integer.
*   secondDecimal - The string representation of a floating-point number.
*   secondString - A string consisting of one or more space-separated words.
**/
function performOperation(secondInteger, secondDecimal, secondString) {
    // Declare a variable named 'firstInteger' and initialize with integer value 4.
    const firstInteger = 4;
    
    // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
    const firstDecimal = 4.0;
    
    // Declare a variable named 'firstString' and initialize with the string "HackerRank".
    const firstString = 'HackerRank ';
    
    // Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number        type) on a new line.
    console.log(Number(firstInteger) + Number(secondInteger));
    
    
    // Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number            type) on a new line.
    console.log((firstDecimal) + Number(secondDecimal));
    
    
    // Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The        variable 'firstString' must be printed first.
    console.log(firstString + secondString);
    
}
```

## Day 1: Arithmetic Operators
```javascript
/**
*   Calculate the area of a rectangle.
*
*   length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the rectangle's area.
**/
	function getArea(length, width) {
	    let area;
	    area = length* width;
	    return area;
	}

/**
*   Calculate the perimeter of a rectangle.
*	
*	length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the perimeter of a rectangle.
**/
	function getPerimeter(length, width) {
		// Write your code here
	    let perimeter;
	    perimeter = 2*length + 2* width
	    return perimeter;
		}
}
```

## Day 1: Functions
```javascript

/*
 * Create the function factorial here
 */

function factorial (n){  
    let fact = 1;
    while(n>0){
        fact = fact*n;
        n--;
    }
    return fact;
}
```
## Day 1: Let and Const
```javascript

function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    const PI = Math.PI
    let r = readLine();
    // Print the area of the circle:
    console.log(r*r* PI);
    // Print the perimeter of the circle:

    //##---------------------##---------------##
    
   try {    
       // Attempt to redefine the value of constant variable PI
        PI = 0;
        // Attempt to print the value of PI
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}
```
## Day 2: Conditional Statements: If-Else
```javascript

function getGrade(score) {
    let grade;
    if(score > 25 && score<=30){
        grade = 'A';
        return grade;
    }
    else if(score > 20 && score<=25){
        grade = 'B';
        return grade;
    }
    
    else if(score > 15 && score<=20){
        grade = 'C';
        return grade;
    }    
    else if(score > 10 && score<=15){
        grade = 'D';
        return grade;
    }
    
    else if(score > 5 && score<=10){
        grade = 'E';
        return grade;
    }
    else if(score > 0 && score<=5){
        grade = 'F';
        return grade;
    }
    
    return grade;
}
```
## Day 2: Conditional Statements: Switch
```javascript
function getLetter(s) {
    let letter;
    // Write your code here
    switch(s[0]) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            return 'A';
        case 'b':
        case 'c':
        case 'd':
        case 'f':
        case 'g':
            return 'B';
        case 'h':
        case 'j':
        case 'k':
        case 'l':
        case 'm':
            return 'C';
        default:
            return 'D';
    }
    return letter;
}
```
## Day 2: Loops
```javascript
/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    const vowels = 'aeiou';
    let consonants = '';
    
    for(let i = 0; i < s.length; i++) { //loop through the entire string
       if (vowels.includes(s[i])) { //if the letter is a vowel console.log it
           console.log(s[i]); //
       }
       else {
           consonants += s[i] + '\n'; //put back into the array
       }
    }
        
    console.log(consonants.trim()); //prints the all the consonants
}
```
## Day 3: Arrays
```javascript
/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > first) { //largest number found
            second = first; //The largest is now the second largest
            first = nums[i] //defining new largest
        }

        if (nums[i] > second && nums[i] < first) { //New second largest number found
            second = nums[i];   //defining new second largest
        }
}
    return second;
}
```
## Day 3: Try, Catch, and Finally
```javascript
/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
  try{
    let newString = s.split("")
                 .reverse()
                 .join("");
                 // same thing as s.split("").reverse().join("")
    console.log(newString);
  }
  catch(e){
    console.log(e.message); //error message
    console.log(s);
  }
}
```
## Day 3: Throw
```javascript
/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
        try{
           if (a<0){
               throw "Negative Error"
           } else
            if (a == 0){
                throw "Zero Error";
            } 
            else {
                return "YES"
            } 
        }  
        catch(err){
            return err;
        }  
}
```
## Day 4: Create a Rectangle Object
```javascript
/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
    this.length = a;
    this.width = b;
    this.perimeter = (a+b)*2;
    this.area = a*b;
}
```
## Day 4: Count Objects
```javascript
/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects){
    let count=0;
    objects.forEach((object) => { //loop through all objects
	    if(object.x == object.y){
	      count+=1;
	      }
    });
    return count;
}
```
## Day 5: Inheritance
```javascript
/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */
    Rectangle.prototype.area = () { //prototype: Perguntem! (ou ignorem)
        return(this.w * this.h);
    };
/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */ 
    class Square extends Rectangle {
        constructor(s) {
            super(s);
            this.h = s;
            this.w = s;
        }
}
```

## Day 5: Template Literals
```javascript
/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
    //destructuring arrays into multiple variables
    const [a, p] = expressions;
    const root = Math.sqrt((p*p)-(16*a))
    const s1 = (p + root)/4;
    const s2 = (p - root)/4;
    return ([s2, s1]).sort();
}
```

## Day 5: Arrow Functions
```javascript
/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
    return nums.map((n) => n = (n%2==0) ? n*2: n*3); //Perguntem (ou nao  
}

//Same thing as:
function modifyArray(nums) {
  let something = (n) => {
       if(n%2==0)
           return n*2;
        else
            return n*3;
    }
    let newArray = nums.map(something);
    return newArray; 
 }

```
## Day 6: Bitwise Operators
```javascript
/*
*	Return the largest value of any a & b < k in S (where a < b).
* 	
*	n: Set S is a sequence of distinct integers from 1 to n (i.e., {1, 2, ..., n}).
*	k: An integer.
*/
function getMaxLessThanK(n, k) {
    return ((k | (k - 1)) > n) ? (k - 2) : (k - 1); //if (k or k-1 is bigger than n -> return k-2. else return k-1)
}
```
## Day 6: JavaScript Dates
```javascript
// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    let dayName;
    // Write your code here
    const day = new Date(dateString);
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    dayName =  weekDays[day.getDay()];
    return dayName;
}
```
