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

/* possible one day we'll make this function

function validity_check(input, array_of_valid) {
	//returns true or false
}

*/