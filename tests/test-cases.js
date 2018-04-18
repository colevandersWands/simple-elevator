tests({

  'invalid first argument': function() {
    eq(0, simple_elevator(undefined, "3"));
  },
  'invalid second argument': function() {
    eq(0, simple_elevator(3, undefined));
  },
  'two invalid arguments': function() {
    eq(0, simple_elevator(undefined, undefined));
  },
  'two valid arguments': function() {
    eq(1, simple_elevator(2, "3"));
  },
  'floor is higher than button': function() {
    eq(-2, simple_elevator(3, "1"));
  },
  'floor is lower than button': function() {
    eq(2, simple_elevator(1, "3"));
  },
  'invalid first argument': function() {
    eq(0, simple_elevator(1, "1"));
  },
  'button is invalid string': function() {
    eq(0, simple_elevator(2, "4"));
  },
  'button is invalid string': function() {
    eq(0, simple_elevator(2, "44"));
  },
  'floor is number out of range': function() {
    eq(0, simple_elevator(6, "3"));
  },
  'floor is a whole Float': function() {
    eq(1, simple_elevator(2.0, "3"));
  },
  'floor is a fractional Float': function() {
    eq(0, simple_elevator(2.2, "3"));
  },
  'no second argument': function() {
    eq(0, simple_elevator(0));
  },
  'too many args': function() {
    eq(1, simple_elevator(2, "3", {riddle: "_(*)_"}));
  },

}); 














