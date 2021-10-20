# Algorithms
## Table of Contents
- [Description](#description)
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
* Can I restate the problem in my own words?
* What are the inputs that go into the problem?
* What are the outputs that should come from the solution to the problem?
* Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem? (You may not be able to answer this question until you set about solving the problem. That's okay; it's still worth considering the question at this early stage.)
* How should I label the important pieces of data that are a part of the problem?
##### Explore concrete examples
* Start with Simple Examples
* Progress to More Complex Examples
* Explore Examples with Empty Inputs
* Explore Examples with Invalid Inputs
```
//Write a functions which takes in a string and returns a count of each character in the string.
    //Start with Simple Examples
        charCount("aaa") --> {a:3}
        charCount("hello) --> {h:1, e:1, l:2, o:1}
    //Progress to More Complex Examples
        charCount("my phone number is 182763") 
            //numbers? ignore casing? special characters? spaces?
    //Explore Examples with Empty Inputs
        charCount("") 
        //ask what should I return? understand edge cases, will help build something more robust
    //Explore Examples with Invalid Input
```
##### Break it down
* Explicitly write put the steps you need to takes    
```
function charCount(str){
    //declare empty object
    //loop over string for each character
        // if char is a number/letter and a key to object add one
        // if the char is number/letter and not in object , add it and set value to 1
        // if char is something else(space, special character) don't do anything
    //return an object with keys that are lowercase alphanumeric characters in the string
}
charCount(""Your PIN number is 1234!);
```
##### Solve or Simplify
* Simplify
    * Find the core difficulty in what you're trying to do
    * Temporarily ignore that difficulty
    * Write a simplified solution
    * Then incorporate that difficulty back in
    ```
    function charCount(str){
        //declare empty object
        const results = {}
        //loop over string for each character
        for(let i = 0; i < str.length; i++){
            const char = str[i].toLowerCase()
            // if char is a number/letter and a key to object add one
            if(results[char] > 0){
                results[char]++;
            // if the char is number/letter and not in object , add it and set value to 1
            }else{
                result[char] = 1
            }
            // if char is something else(space, special character) don't do anything
        }
        //return an object with keys that are lowercase alphanumeric characters in the string
        return results
    }
    charCount(""Your PIN number is 1234!);
    ```
##### Look Back and Refactor
* REFACTORING QUESTIONS
    * Can you check the result?
    * Can you derive the result differently?
    * Can you understand it at a glance?
    * Can you use the result or method for some other problem?
    * Can you improve the performance of your solution?
    * Can you think of other ways to refactor?
    * How have other people solved this problem?
    ```
    function charCount(str){
        let countOfChars = {};
        for( let char of str){
            char = char.toLowerCase();
            if(/[a-z0-9]/.test(char)){
                countOfChars[char] = countOfChars[char] + 1 || 1;
            }
        }
        return countOfChars;
    }

    
    ```
## Questions
email, or any other form of contact at my portfolio
<br>
-Email: [danielsoledad@gmail.com](mailto:danielsoledad@gmail.com)
<br>
-GitHub Username: [tuzosdaniel12](https://github.com/tuzosdaniel12) 
<br>
-Portfolio: [daniel-soledad.dev](https://www.daniel-soledad.dev/)
