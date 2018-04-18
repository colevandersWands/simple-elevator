## Subtract First, Ask Questions Later

```js
function simple_elevator(floor, button) {
  let returner = 0; 
  
  let potential_result = Number(button) - floor;

  let possible_results = [-3, -2, -1, 0, 1, 2, 3];
  for (let result of possible_results) {
    if (result === potential_result) {
      returner = potential_result;
    }
  }

  return returner;
};
```
___

### Strategy Explanation


> The validity of the output is not the validity of the input

This strategy was a fail, it accepts inputs that are out of range but produce a valid output:
```
We'll take the arguments directly as they are and try to subtract them, placing some faith that we'll get more valid arguments than invalid arguments.

If the result is one of our accepted outputs we'll return it. if not we'll return 0.

We struggled a bit with whether to subtract the floor from the button, or the button from the floor.

All the reasons this is bad:
- javascript does types and conversions berry poorly
- we false-positive for some inputs that are invalid
```

___

### Comparison

This is by far the simplest strategy, but also sooo bad. 


___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>
 




