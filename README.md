# Algorithms
## Table of Contents
- [Description](#Description)
- [Big O](#big-o)
- [CONSTANTS DO NOT MATTER](#constants-do-not-matter)
- [SMALLER TERMS DO NOT MATTER](#smaller-terms-do-not-matter)
- [BIG-O-SHORTHANDS](#big-o-shorthands)
- [SPACE COMPLEXITY IN JS](#space-complexity-in-js)
- [LOGARITHMS](#logarithms)
- [JAVASCRIPT BUILT IN METHODS AND DATA STRUCTURES](#javascript-built-in-methods-and-data-structures)
    - [OBJECTS](#objects)
    - [ARRAYS](#Questions)
- [ALGORITHMS AND PROBLEMS SOLVING PATTERS](#algorithms-and-problems-solving-patters)
    - [Understand the problems](#understand-the-problems)
    - [Explore concrete examples](#explore-concrete-examples)
    - [Break it down](#break-it-down)
    - [Solve or Simplify](#solve-or-simplify)
- [Description](#description)
- [Questions](#questions)

## Description

This repo is for me to practice algorithms and data structures

## Big O
### CONSTANTS DO NOT MATTER
* O(2n) ---> O(n)
* O(500) ---> O(1)
* O(13n^2) ---> O(n^2)

### SMALLER TERMS DO NOT MATTER
* O(n+10) ---> O(n)
* O(1000n + 50) ---> O(n)
* O(n^2 + 5n + 2) ---> O(n^2)

### BIG-O-SHORTHANDS
* 1. Arithmetic operations are constant => O(n)
* 2. variables assignment is constant
* 3. Accessing elements in an array are constant
* 4. In a loop the complexity is the length of the loop times the complexity of whatever happens inside od the loop


### SPACE COMPLEXITY IN JS
* MOST PRIMITIVE(booleans, numbers, undefined, null) are constant space
* Strings require O(n) space (where n is the string length)
* Reference types are generally O(n) where n uis the length 


### LOGARITHMS 
* log2(8) = 3 ---> 2^3 = 8
* log2(value) = exponent ---> 2^exponent = value 

* calculate roughly the binary logarithm of number roughly measures
* the number of times you can divide that number by two before you get a value that's less than or equal
* to one.

### JAVASCRIPT BUILT IN METHODS AND DATA STRUCTURES
#### OBJECTS
* Object.keys - O(n)
* Object.values - O(n)
* Objects.entries - O(n)
* hasOwnProperty - O(1)
* unordered data structures 
* well work well when fast access / insertion and removal
    * Insertion - O(1)
    * Removal - O(1)
    * Searching - O(n)
    * Access - O(1)
    * when you don't need any ordering, objects are an excellent choice
```
let instructor = {
    name: "Dan",
    lastName: "Soledad",
    age: "29",
    favNumbers: [1,2,3,4]
}
```
#### ARRAYS
* ordered list 
* when you need order
* when you need fast access / insertion and removal(sort of...)
* Big O
    * Insertion - it depends
    * Removal - It depends
    * searching - O(n)
    * Access - O(1)
* push - O(1)
* pop - O(1)
* shift - O(n)
* unshift - O(n)
* concat - O(n)
* slice - O(n)
* splice - O(n)
* sort - O(n * log n)
* forEach/map/filter/reduce/etc. - o(n)}
    
### ALGORITHMS AND PROBLEMS SOLVING PATTERS
1. Devise and plan for solving problems
2. Master common problem solving patters
#### Problem Solving
##### Understand the problems
##### Explore concrete examples
##### Break it down
##### Solve or Simplify
##### 5. Look Back and Refactor

## Description

This repo is for me to practice algos and data structures
## Questions
email, or any other form of contact at my portfolio
<br>
-Email: [danielsoledad@gmail.com](mailto:danielsoledad@gmail.com)
<br>
-GitHub Username: [tuzosdaniel12](https://github.com/tuzosdaniel12) 
<br>
-Portfolio: [daniel-soledad.dev](https://daniel-soledad.dev)