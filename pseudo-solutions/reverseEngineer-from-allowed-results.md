# Reverse Engineer From Allowed Results

```
reverse_engineer (floor_num, string_butt) 
	returner = 0
	outputs <- [-3, -2, -1, 0, 1, 2, 3]
	for each in outputs
		try adding Number(string_butt)
		does it equal floor_num?
			returner <- outputs[each]
	return returner
END reverse_engineer
```

___

### Strategy Explanation

> The validity of the output is not the validity of the input

This strategy has the same flaws as the Subtract First.  It is an option, but only coupled with rigorous type checks first.

```
We know there are only a small set of possible outputs.  We will try to reconstruct the input types and values by going backwards through a "typical" solution process. 

If the results of this reverse-engineering match the arguments, all is good.  Return the correct reverse-engineered return value.
```

___

### Strategy Comparison

This strategy is completely backwards from other strategies we considered. It is generally a very inefficient strategy, but because our inputs and outputs are so tightly constrained, it's not a bad option for this problem.

It has the advantage of avoiding all of the conditional checks we see in other strategies.


___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>
