## Exhaustive Validity Check

```
exhaustive_check (num_floor, string_butt)
	returner = 0
	valid_floor = false
	valid_butt = false

	possible_floors <- [0, 1, 2, 3]
	for floor in possible_floors
		if num_floor == floor
			valid_floor = true

	possible_butts <- ["0", "1", "2", "3"]
	for butt in possible_butts
		if string_butt == butt
			valid_butt = true

	if (valid_butt & valid_floor)
		returner = num_floor - string_butt

	return returner
END exhaustive_check
```

___

### Strategy Explanation

Since there are very few allowable inputs, we'll just do an exhaustive check to see if the arguments are valid.  Then we'll do the subtraction if they are.

___

### Strategy Comparison

This strategy is probably the simplest one we came up with.  We don't need to deal with "typeof"s or tricky conversions, complex chains of conditional checks, or any of that nuisance. 



___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>