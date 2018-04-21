# [Simple Elevator](https://www.codewars.com/kata/simple-elevator)

Write a function that mimics the behavior of a safe elevator.  It will travel from where it is, to the floor for the button pressed _if_ the button is valid.

simple_elevator : Function
* Args: 2
  1. _Number_: the floor the elevator is on - (0 <= floor <= 3)
  2. _String_: the floor the elevator should go to - ["0","1","2","3"]
* Return: _Number_ --> -3 <= n <= 3
  * Return value indicates how many floors the elevator has traveled
* Behavior: This function will move from it's starting location to it's finishing location, returning the number of floors moved. It is a safe elevator. In case any argument is invalid, it will stay in place to avoid injuring the occupants.

```js
function simple_elevator(floor, button) {
 let returner = 0;
 let floor_is_valid = false;
 let button_is_valid = false;
  
 let possible_floors = [0, 1, 2, 3];
 for (let valid_floor of possible_floors) {
   if (floor === valid_floor) {
     floor_is_valid = true;
   }
 }

 
 let possible_buttons = ["0", "1", "2", "3"];
 for (let valid_button of possible_buttons) {
   if (button === valid_button) {
     button_is_valid = true;
   }
 }

 if (button_is_valid && floor_is_valid) {
    returner = Number(button) - floor;
 }
  
 return returner;
}
```


### Index
* [Input Analysis](#input-analysis)
* [Solution Explanation](#solution-explanation)
* [Constraints](#constraints)
* [Resource Estimation](#resource-estimation)
* [Scaffolding](#scaffolding)
* [Language Features](#language-features)
* [Bugs & Challenges](#bugs-challenges) 
* [Use Cases](#use-cases)
* [Learning Journal](#learning-journal)

---

## Input Analysis

What can we measure, analyze or do to incoming args:
* Types of arguments
  * If it's string, is it empty
  * Do math to them if they're numbers
  * Convert types
  * Range of number (<, >, ==, ...)
    * Exclude or include accordingly
* Compare to known valid inputs

Classifications:
* Validity & Invalidity
  * Valid floor, invalid button
  * ... all 4 combinations
* Floor is higher than button
* Floor is lower than button
* Floor is same as button
* Button is a string, but not in the list
* Floor is a number, but is not in the range
* Floor is a number, but has a decimal 
  * Decimal is 0
  * Decimal is not 0
* No second argument is passed in
* More than two args are passed in
* Number starts with too many 0's
* (noticed this one after failing tests):
  * Inputs whose difference is a valid output, but are not valid themselves.


I wrote a case or two for each bullet point.  In writing my tests I noticed the "floor is not a number" case was incomplete and added two sub-cases.

[TOP](#index)

___

## Solution Explanation


Since there are very few allowable inputs, we'll just do an exhaustive check to see if the arguments are valid.  Then we'll do the subtraction if they are.

This Kata's prompt is a functional model of an elevator.  We were curious how an object oriented strategy would change the solutions, so we built one.  

You can compare both the FP & OOP solutions in [this gist](https://gist.github.com/colevandersWands/0ecf1b70b0f9641f49e5500356dfe5b4)

[TOP](#index)

---

## Constraints

We will solve it twice:
1. With a pure function, unconstrained
2. With an object. 
  * Testing will be trickier
  * The specs will change

[TOP](#index)

___


## Resource Estimation

didn't do this 


[TOP](#index)

___

## Scaffolding

[Scaffolding Gist](https://gist.github.com/colevandersWands/db24816532b371c27abe682380f5dca2)

We had a heated discussion about the use of '==' & '===' for comparing numbers to the similar string (ie. 4 & "4").  

We defaulted our return value to 0.

[TOP](#index)

___


## Language Features

Nothing fancy.  If's, for's, '===' and a Number conversion.


[TOP](#index)

---

## Challenges & Bugs

We initially tried the "ask questions later" strategy, and found out it didn't work when one of our test cases alerted us to the fact that we can accept a false-positive if invalid arguments produce a valid result.  So we pivoted to another pseudo-solution we prepared.

There was also some confusion about tiny test, but we'll look into that later.

[TOP](#index)

___

## Use Cases

* for someone trying to understand how elevators work
* CLI text-based adventure game
* de-elevatoring: anywhere we need to find absolute distances constrained to a range
* strategy practice: validating inputs
* gut the solution and reuse the type checking



[TOP](#index)

---

## Learning Journal

Things I learned studying this problem:
* !! we failed the test case s_e(6, "3") !!  
  * This showed us that our strategy is bad, we will accept many arguments that return a valid output but are invalid inputs.
  * This class of arguments: any numbers such that (floor - button = valid output), but floor or button are invalid inputs.


New vocabulary:


Things I struggled with:


Lessons to apply for next time:



[TOP](#index)

___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>

