# [Simple Elevator](https://www.codewars.com/kata/simple-elevator)

Write a function that mimics the behavior of a safe elevator.  It will travel from where it is, to the floor for the button pressed _if_ the button is valid.

simple_elevator : Function
* Args: 2
  1. _Number_: the floor the elevator is on - (0 <= floor <= 3)
  2. _String_: the floor the elevator should go to - ["0","1","2","3"]
* Return: _Number_ --> -3 <= n <= 3
  * Return value indicates how many floors the elevator has traveled
* Behavior: This function will move from it's starting location to it's finishing location, returning the number of floors moved. It is a safe elevator. In case any argument is invalid, it will stay in place to avoid injuring the occupants.

'''js
// copy of your polished solution for easy reference.
'''


### Index
* [Input Analysis](#input-analysis)
* [Solution Explanation](#solution-explanation)
* [Constraints](#constraints)
* [Resource Estimation](#resource-estimation)
* [Scaffolding](#scaffolding)
* [Bugs & Challenges](#bugs-challenges) 
* [Language Features](#language-features)
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




How did you use this information to select your test cases?



[TOP](#index)

___

## Solution Explanation

Explain your solution in detail, however works for you.  Perhaps by using a specific input to illustrate, by describing your strategy, or by including a diagram [directly from Sketchboard.io](https://sketchboard.io/blog/2014/03/06/github-sketchboard.html).

[TOP](#index)

---

## Constraints

What constraints did you place on yourself, and why?  Did they end up being helpful or not?

[TOP](#index)

___


## Resource Estimation

Estimate how what resources you will require, and how much of each.  


[TOP](#index)

___

## Scaffolding

Provide a link to Gist you used to construct your solution's scaffolding.  What difficulties did you have making it?  How helpful was it in coming up with your finished solution?

[TOP](#index)

___

## Challenges & Bugs

What particular challenges & bugs did you come across when you were filling in your scaffolding?

Were they logic bugs? Language bugs? 

Did you have trouble keeping track of which part of the challenge you were solving?

[TOP](#index)

___

## Language Features

List the language features used in your solution.

The focus of these exercises are to strengthen you problem solving skills, not to learn the newest ES6 tricks. When you have the choice between to different language features it is better to choose the option that is easiest to read, most common, or most consistent with the rest of your solution.  

Keeping track of the language features you use will enable you separate the problem solving strategy from the implementation.  Being aware of this difference will be an asset later on when you're faced with larger applications and popular frameworks.

[TOP](#index)

---
## Use Cases

List 5+ use cases for your solution.  They can be stand-alone, part of an application, or impractical.  Your use cases can be overly complicated, or very basic. What's important is that you come up with as many and as diverse use cases as possible.


[TOP](#index)

---

## Learning Journal

Things I learned studying this problem:


New vocabulary:


Things I struggled with:


Lessons to apply for next time:



[TOP](#index)

___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>

