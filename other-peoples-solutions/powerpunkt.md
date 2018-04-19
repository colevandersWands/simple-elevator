## [Powerpunkt](https://www.codewars.com/users/powerpunkt)

```js
function goto(level,button){
  if( typeof level != 'number' || 
      typeof button != 'string' ||
      level % 1 || button % 1 ||
      level < 0 || button < 0 ||
      level > 3 || button > 3 ){
    return 0;
  }
  var run = false, count = 0, arr = [-3,-2,-1,0,1,2,3];
  for(x in arr){
    if(level == button){
    }else if(!run && level == arr[x] || !run &&  button == arr[x]){
      run = true;
    }else if(level == arr[x] || button == arr[x]){
      run = false;
    }
    if(run){
      count++;
    }
  }
  if(level > button){
    count = 0 - count;
  }
  return count;
}
```

[PythonTutor](https://goo.gl/WNKiyw)

___

### Strategy Analysis

Check the validity of inputs. Then checking if it's in the allowed outputs. ...

This is a mess. There's duplication of effort, unclear code, and no clearly unified strategy.  It looks like they might have just spaghettied together a solution that works and called it a day. 

I don't see enough of a cohesive strategy to bother analyzing.

___

### Language Features

* [multiple variable declarations on one line](https://stackoverflow.com/questions/694102/declaring-multiple-variables-in-javascript)
  * more annoying to maintain
  * but can lead to more minified code
* !. The boolean negation.  
  * Putting this in front of a statement changes the truth value
  * !false === true
* empty if statement 


___

### Comparison

Nevermind this section.