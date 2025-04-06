# 📜 JavaScript Documentation

Welcome to the **JavaScript Basics** documentation! 🚀 This guide is designed for both **college students** and **professionals** looking to strengthen their JavaScript fundamentals.

> "JavaScript is the duct tape of the internet." – Charlie Campbell

---

Here's the **Table of Contents** for the **README.md** file, covering all chapters up to **Chapter 18** in an aesthetic format. 🚀  

---

## 📖 Table of Contents  

1. [📘 Chapter 1: Introduction](#-chapter-1-introduction)  
2. [⚙️ Chapter 2: Basics](#-chapter-2-basics)  
3. [🔁 Chapter 3: Conversion & Operators](#-chapter-3-conversion--operators)  
4. [🧮 Chapter 4: Comparisons](#-chapter-4-comparisons)  
5. [🧠 Chapter 5: Memory Management](#-chapter-5-memory-management)  
6. [📝 Chapter 6: Strings](#-chapter-6-strings)  
7. [🔢 Chapter 7: Numbers & Math](#-chapter-7-numbers--math)  
8. [📆 Chapter 8: Dates](#-chapter-8-dates)  
9. [📚 Chapter 9: Arrays](#-chapter-9-arrays)  
10. [🧱 Chapter 10: Objects](#-chapter-10-objects)  
11. [🔄 Chapter 11: Functions](#-chapter-11-functions)  
12. [📌 Data Type Summary](#-data-type-summary)  
13. [📦 Chapter 12: Scope](#-chapter-12-scope)  
14. [🏹 Chapter 13: Arrow Functions](#-chapter-13-arrow-functions)  
15. [⚡ Chapter 14: IIFE (Immediately Invoked Function Expression)](#-chapter-14-iife-immediately-invoked-function-expression)  
16. [🧭 Chapter 15: Control Flow](#-chapter-15-control-flow)  
17. [🔀 Chapter 16: Switch Statements](#-chapter-16-switch-statements)  
18. [✅ Chapter 17: Truthy & Falsy](#-chapter-17-truthy--falsy)  
19. [🔁 Chapter 18: Loops - For, While, Do-While](#-chapter-18-loops---for-while-do-while)  
20. [🌀 Chapter 19: Array Iteration (forEach, map, filter)](#-chapter-19-array-iteration-foreach-map-filter)  
21. [🔃 Chapter 20: Array Looping](#-chapter-20-array-looping)  
22. [➕ Chapter 21: Reduce Method](#-chapter-21-reduce-method)  
23. [🌐 Chapter 22: DOM Introduction](#-chapter-22-dom-introduction)  
24. [📡 Chapter 23: API - Fetch and JSON](#-chapter-23-api---fetch-and-json)  

---

## 🏁 Chapter 1: Introduction
JavaScript is a **high-level, interpreted** programming language widely used for **web development**. It allows you to build **interactive web applications** and is an essential part of modern frontend and backend development.

JavaScript can be used for:
- **Client-side scripting**: Enhancing web pages with dynamic content.
- **Server-side development**: Using environments like Node.js.
- **Mobile applications**: Frameworks like React Native.
- **Game development**: Creating browser-based games.

> "JavaScript is the language of the web." – Unknown

---

## 🔤 Chapter 2: Basics
### 📌 Variable Declarations
JavaScript provides three ways to declare variables:
- **`var`**: Function-scoped, can be redeclared.
- **`let`**: Block-scoped, can be reassigned.
- **`const`**: Block-scoped, cannot be reassigned.

```js
const accountId = 12345; // Cannot be changed after initialization
let accountEmail = "me.coder.in@gmail.com";
var accountPassword = "12345";
accountCity = "Varanasi"; // Not recommended
let accountState; // Undefined variable
```

### ✅ Best Practices
- Use `let` and `const` instead of `var`.
- `const` for constants, `let` for reassignable variables.
- Avoid **global variable pollution**.

---

## 🔄 Chapter 3: Conversion Operators
### 📌 Type Conversion
JavaScript automatically converts data types in some cases (type coercion). Explicit conversion is also possible.
```js
let score = "33";
console.log(Number(score)); // 33 (Converted to number)
console.log(Boolean("")); // false
console.log(String(100)); // "100"
```

### 📌 Operators
Operators perform operations on variables and values.
```js
console.log(2 + "2"); // "22" (String Concatenation)
console.log(2 - "2"); // 0 (Implicit Conversion)
console.log(3 ** 2); // 9 (Exponentiation)
```

---

## ⚖️ Chapter 4: Comparisons
### 📌 Loose vs Strict Comparison
```js
console.log(2 == "2"); // true (Type conversion happens)
console.log(2 === "2"); // false (Strict comparison)
```
> "== checks value, === checks value and type."

### 📌 Truthy & Falsy Values
Falsy values: `false`, `0`, `""`, `null`, `undefined`, `NaN`
Truthy values: Everything else
```js
console.log(Boolean("Hello")); // true
console.log(Boolean(0)); // false
```

---

## 🧠 Chapter 5: Memory Management
### 📌 Stack vs Heap
JavaScript manages memory using **stack** (for primitive data) and **heap** (for objects).
```js
let a = 10;
let b = a; // Creates a copy
b = 20;
console.log(a); // 10
```
```js
let obj1 = {name: "Krishna"};
let obj2 = obj1;
obj2.name = "Coder";
console.log(obj1.name); // "Coder"
```
> "Primitive types are copied, objects are referenced."

---

## ✍️ Chapter 6: Strings
### 📌 String Manipulation
```js
let str = "Hello, World!";
console.log(str.length); // 13
console.log(str.toUpperCase()); // "HELLO, WORLD!"
console.log(str.includes("Hello")); // true
```

---

## 🔢 Chapter 7: Numbers & Math
### 📌 Number Methods & Math Functions
```js
console.log(Math.round(4.7)); // 5
console.log(Math.random()); // Random number between 0-1
console.log((23.3456).toFixed(2)); // "23.35"
```

---

## 📅 Chapter 8: Dates
### 📌 Working with Dates
```js
let today = new Date();
console.log(today.toDateString()); // "Mon Mar 25 2025"
console.log(today.getFullYear()); // 2025
```

---

## 📦 Chapter 9: Arrays
### 📌 Array Basics
```js
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits.length); // 3
console.log(fruits.push("Mango")); // Adds "Mango"
```

---

## 🏗️ Chapter 10: Objects
### 📌 Object Basics
```js
let person = { name: "John", age: 25 };
console.log(person.name); // "John"
person.country = "USA"; // Adding new property
```

---

## 🔄 Chapter 11: Functions

## Introduction 📖
Functions in JavaScript are reusable blocks of code designed to perform a specific task. They enhance modularity, reusability, and readability. JavaScript functions can take inputs (parameters), process them, and return outputs.

For a detailed guide, refer to the official documentation: [MDN JavaScript Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

---

## Function Basics 🛠️
### 1️⃣ Defining a Function
A function is declared using the `function` keyword, followed by a name and parentheses `()` that may contain parameters.

```javascript
function sayMyName(){
   console.log("K");
   console.log("I");
   console.log("R");
   console.log("S");
   console.log("H");
}
```
💡 *This function prints each letter of 'KRISH' on a new line.*

---

### 2️⃣ Function with No Parameters 🔢
```javascript
function TwoSum(){
    const a = 2;
    const b = 3;
    console.log(a + b);
}
```
💡 *This function adds two numbers (2 and 3) and prints the result (5).*

---

### 3️⃣ Function with Parameters 🎯
Parameters allow passing values to a function dynamically.

```javascript
function addTwoNumber(number1, number2){
    let result = number1 + number2;
    return result;
}
const result = addTwoNumber(2, 3);
console.log("Result : ", result);
```
💡 *Here, `number1` and `number2` are parameters, while `2` and `3` are arguments.*

---

### 4️⃣ Handling Undefined Parameters 🛑
```javascript
function loginUserMessage(username){
    if(username === undefined){
       console.log("Please enter a username");
       return;
    }
    return `${username} just logged in`;
}
console.log(loginUserMessage("krish"));
```
💡 *If a parameter is not provided, the function returns `undefined` and prompts the user to enter a username.*

---

## Advanced Function Concepts 🚀
### 5️⃣ Rest Operator `...` 📦
The rest operator allows a function to accept multiple arguments as an array.
```javascript
function calculateCartPrice(val1, val2, ...num1){
    return num1;
}
console.log(calculateCartPrice(200, 300, 400, 3000));
```
💡 *Here, `val1` and `val2` get the first two arguments, while the rest are collected into `num1` as an array.*

---

### 6️⃣ Passing Objects to Functions 🏗️
```javascript
const user = {
    username: "krish",
    price: 199
};

function handObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
handObject(user);
```
💡 *This function accepts an object and prints its properties dynamically.*

---

### 7️⃣ Passing Arrays to Functions 📊
```javascript
const myNewArray = [200, 3000, 400];

function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));
```
💡 *This function extracts the second element from an array and returns it.*

---

---

## 📌 Data Type Summary
| Type       | Example       |
|------------|--------------|
| String     | "Hello"      |
| Number     | 42           |
| Boolean    | true/false   |
| Null       | null         |
| Undefined  | undefined    |
| Object     | {key: value} |
| Array      | [1, 2, 3]    |

---

This documentation serves as a **quick reference** and **learning guide** for JavaScript fundamentals. Happy coding! 🚀

# 📘 JavaScript Advanced Concepts (Chapters 12 - 18)

## 🔄 Chapter 12: Scopes

### Introduction 🌍
Scope in JavaScript determines the accessibility of variables, functions, and objects at various parts of the code. It ensures that variables are used within their intended context.

### 1️⃣ Global Scope 🌎
Variables declared outside any function are accessible throughout the script.
```javascript
let globalVar = "Accessible Everywhere";
function showGlobal() {
    console.log(globalVar);
}
showGlobal();
```

### 2️⃣ Local (Function) Scope 🔒
Variables declared inside a function are accessible only within that function.
```javascript
function localScope() {
    let localVar = "Accessible only inside this function";
    console.log(localVar);
}
localScope();
// console.log(localVar); // ❌ Error: localVar is not defined
```

### 3️⃣ Block Scope 🏗️
Introduced in ES6, `let` and `const` have block-level scope.
```javascript
{
    let blockScoped = "Inside Block";
    console.log(blockScoped); // ✅ Accessible
}
// console.log(blockScoped); // ❌ Error: Not defined outside
```

---

## ⚡ Chapter 13: Arrow Functions

### Introduction 🎯
Arrow functions provide a concise way to write functions and automatically bind `this`.

### 1️⃣ Basic Syntax 📝
```javascript
const add = (a, b) => a + b;
console.log(add(5, 3));
```

### 2️⃣ Implicit Return 🚀
```javascript
const greet = name => `Hello, ${name}!`;
console.log(greet("Krish"));
```

### 3️⃣ Arrow Functions & `this` 🔄
Arrow functions don’t bind their own `this`; they inherit from their parent scope.
```javascript
const person = {
    name: "Krish",
    sayName: function() {
        setTimeout(() => {
            console.log(this.name);
        }, 1000);
    }
};
person.sayName();
```

---

## 🚀 Chapter 14: IIFE (Immediately Invoked Function Expressions)

### Introduction ⚡
IIFE executes immediately after being defined, preventing global scope pollution.

### 1️⃣ Basic IIFE 🏃‍♂️
```javascript
(function() {
    console.log("Executed immediately!");
})();
```

### 2️⃣ IIFE with Parameters 🎭
```javascript
(function(name) {
    console.log(`Hello, ${name}`);
})("Krish");
```

---

## 🔀 Chapter 15: Control Flow

### Introduction 🔄
Control flow dictates the execution order of statements in JavaScript.

### 1️⃣ If-Else Conditions ✅
```javascript
let age = 18;
if (age >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible");
}
```

### 2️⃣ Ternary Operator 🔄
```javascript
let result = age >= 18 ? "Adult" : "Minor";
console.log(result);
```

---

## 🔄 Chapter 16: Switch Case

### Introduction 🔁
Switch statements allow efficient multiple condition checks.

### 1️⃣ Basic Switch Usage 🎚️
```javascript
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of the week!");
        break;
    case "Friday":
        console.log("Weekend approaching!");
        break;
    default:
        console.log("Regular day");
}
```

---

## 🎭 Chapter 17: Truthy & Falsy Values

### Introduction ✅❌
JavaScript treats some values as `true` (truthy) and others as `false` (falsy) when used in boolean expressions.

### 1️⃣ Falsy Values ❌
```javascript
console.log(Boolean(0));        // false
console.log(Boolean(""));       // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));       // false
```

### 2️⃣ Truthy Values ✅
```javascript
console.log(Boolean("Hello"));   // true
console.log(Boolean(42));        // true
console.log(Boolean([]));        // true
console.log(Boolean({}));        // true
```

---

## 🔄 Chapter 18: Loops (For Loop)

### Introduction 🔁
Loops iterate over elements, reducing repetition.

### 1️⃣ For Loop 📊
```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

### 2️⃣ Iterating Over Arrays 📋
```javascript
const fruits = ["Apple", "Banana", "Cherry"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
```

### 3️⃣ `forEach` Loop 🔄
```javascript
fruits.forEach(fruit => console.log(fruit));
```

---

## 📘 JavaScript Notes (Chapters 19-24)

## 🔥 Chapter 19: DOM (Document Object Model)

#### 📌 Introduction
The DOM represents the HTML structure of a web page as a tree of objects. JavaScript can access and modify these elements using DOM APIs, enabling dynamic interactions.

#### ✨ Accessing Elements
- `document.getElementById('id')`
- `document.querySelector('.class')`
- `document.querySelectorAll('tag')`

```javascript
const title = document.getElementById("main-title");
const buttons = document.querySelectorAll(".btn");
```

#### 🧠 Manipulating Elements
- **Text Content**: `element.textContent`, `element.innerText`
- **HTML Content**: `element.innerHTML`
- **Style**: `element.style.color = "blue";`

```javascript
title.textContent = "Updated Title";
buttons[0].style.backgroundColor = "red";
```

#### ⚙️ Event Listeners
- Events like `click`, `mouseover`, etc., allow interactivity.

```javascript
buttons[1].addEventListener("click", () => {
  alert("Button Clicked!");
});
```

> 🧩 The DOM is the backbone of front-end interactivity, letting developers create dynamic, responsive UIs.

---

## 🔁 Chapter 20: Array Loops

#### 📌 Overview
JavaScript provides multiple looping methods for arrays to perform iterations and transformations.

#### 🔄 `forEach()`
Used for executing a function on each element (no return).

```javascript
const nums = [1, 2, 3];
nums.forEach((num) => console.log(num));
```

#### 🔍 `map()`
Returns a new array after transforming each element.

```javascript
const squared = nums.map((n) => n * n); // [1, 4, 9]
```

#### 📋 `filter()`
Filters elements based on a condition.

```javascript
const even = nums.filter((n) => n % 2 === 0); // [2]
```

#### 🎯 `find()`
Returns the first element that matches a condition.

```javascript
const found = nums.find((n) => n > 2); // 3
```

---

## ➕ Chapter 21: `reduce()`

#### 📌 Purpose
The `reduce()` method executes a reducer function on each element of the array, resulting in a single output value.

```javascript
const numbers = [1, 2, 3, 4];
const total = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(total); // 10
```

- `acc`: Accumulator (initially set to 0 in the example)
- `curr`: Current element being processed

> ✨ Best for aggregating values like sums, averages, or complex objects.

---

## 🌐 Chapter 22: API Basics (Fetch API)

#### 📌 What is an API?
An API allows you to fetch data from a server (backend or third-party) using JavaScript.

#### 🌍 Using `fetch()`

```javascript
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => console.log(data));
```

- `fetch()` is promise-based.
- First `.then()` gets the raw response.
- Second `.then()` extracts JSON data.

#### ⚠️ Error Handling

```javascript
fetch("invalid_url")
  .then((res) => res.json())
  .catch((err) => console.error("Error:", err));
```

> 🧩 APIs bridge frontend apps with external data sources.

---

_This documentation is inspired by MDN Web Docs and designed for effective and clean learning._





