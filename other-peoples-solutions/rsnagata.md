## [Rsnagata](https://www.codewars.com/users/rsnagata)

```js
function goto(level,button){ 
  return typeof level === 'number' && typeof button === 'string' && 
  level % 1 === 0 && parseFloat(button) % 1 === 0 && 
  level < 4 && parseInt(button) < 4 ?  button - level : 0;
}

// refactor for legibility and debuggability
function goto(level,button){ 
  if (typeof level === 'number') { // check type of level

  	if (typeof button === 'string') { // check type of button

  		if (level % 1 === 0) { // is level whole number

  			if ((parseFloat(button) % 1) === 0) { // is floor whole number

  				if (level < 4) { // is the level valid

  					if (parseInt(button) < 4) { // is the button valid
  						return (button - level) 
  					}
  				}
  			}
  		}
  	}
  }	
  return 0;
}
```

[PythonTutor](https://goo.gl/QN1YHy)

___

### Strategy Analysis

Interesting use of modulo, but fundamentally flawed.  They allow negative numbers!  Baaad codewar test cases let this through.

That aside their main strategy is to check types and validity, then subtract. They just messed up on their validity checking.  then there were not test cases to catch it.

___

### Language Features


___

### Comparison

Same implementation strategy as Sevenfun: a long conditional check for every condition, and an immediate return from their ternary operation