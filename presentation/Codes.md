```javascript
const x = 6; // Constant
let y = 8; // Outer Variable

x = 8; // Not Allowed!
y = 1; // Allowed!

function sum(a, b) {
    let y = a + b; // Local Variable
    console.log(y); // Prints a+b
}

sum(3,5); // Prints 8
console.log(y); // Prints 1
```

```javascript
let evening = true; // Boolean
let x = 6; // Integer
let name = "Tulio"; // String
let dogs = ["Pitbull", "Golden Retriever"]; // Array

x = "New Type"; // Automatic coercion to another type

console.log("Elementary, " + "my dear Watson!"); // String concatenation
console.log("Number" + 16); // Prints Number16
console.log(dogs.join(",")); // Prints Pitbull,Golden Retriever
```

```javascript
let person = { // Object
    name: "Henrique Milagres",
    age: 31,
    sex: "Male",
    nicknames: ["Milagrinho", "Milagroso", "Miracle"],
    hasDriverLicense: true
};

console.log(person.name); // Prints Henrique Milagres
console.log(person.height); // Prints Undefined
person.height = "1.80m";
console.log(person.height); // Prints 1.80m
```

```javascript
let sum = (a, b) => { // Named function sum
    return a+b;
}

let alarmFunction = (func) => { // Functions passed as parameters
    setTimeout(func, 1000); // Execute the function after 1000ms
}

console.log(sum(1,3)); // Prints 4 
z = alarmFunction(() => { // Unnamed function
	return sum(1,3);
});
console.log(z); // Prints 4 after 1000ms
```

```javascript
const x = Math.random(); // Random number between 0 and 1
if (x >= 0.7) {
    console.log("Top");
} 
else if(x >= 0.3) {
    console.log("Mid");
}
else {
    console.log("Bottom");
}

const names = ["Milagres", "Tulio", "Breno", "João", "Thaís"];

names.forEach((name) => { // Iterate over names
   console.log(name); 
});

// OR

for (let i = 0; i < names.length; i++) { // Iterate over names using the index increment method
    console.log(names[i]);
}
```

```bash
npm init

npm install package-name

npm install package2 --save

npm install global-package -g

npm uninstall thrash-package --save

npm start
```

