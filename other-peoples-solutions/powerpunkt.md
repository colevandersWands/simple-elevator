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