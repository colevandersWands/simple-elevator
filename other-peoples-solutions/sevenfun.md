## [Sevenfun](https://www.codewars.com/users/sevenfun)

```js
function goto(level,button){
  return (level===0 || level===1 || level===2 || level===3) && (button==='0' || button==='1' || button==='2' || button==='3') ? eval(button-level) : 0;
}

// more readable, more debuggable. refactored this ourselves
function goto_prettier(level,button){
  if (level===0 || level===1 || level===2 || level===3) {
   if (button==='0' || button==='1' || button==='2' || button==='3') {
    return eval(button-level);
   }
  }
  return 0
}

```

[PythonTutor link](https://goo.gl/syL62z)

___

### Strategy Analysis

Exhaustive comparison between actual arguments and valid arguments. If arguments are valid, 
subtract. If not return 0.

___

### Language Features 

[ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
* immediately returns the value
* (statement that evaluates to true or false) ? (return if true do this) : (return if false, do this);
   ```
   if (statement that evaluates to true or false) 
   		if true do this 
   else
   		if false do this
   ```

Used "==="

[eval](https://www.w3schools.com/jsref/jsref_eval.asp)
* [potential security risks](https://stackoverflow.com/questions/1651118/security-risks-of-using-eval-to-execute-user-input-in-javascript)
* eval is not necessary here
* Don't spend any more time understanding this.  you'll (hopefully) never use it


___

### Comparison

This is the same strategy we used. The implementation is very different, 
piling all of the checks in to a single conditional check, and stacking it into a ternary operator. 
But that changes nothing fundamental.  They still checked the arguments against all possible inputs, 
then had a conditional check to subtract the arguments if they were valid.

Interesting to make short and impressive solutions, but not a great production implementation. You can't set break-points, and to debug you would have to sift through a mess of conditional checks all piled in a single comparison.



