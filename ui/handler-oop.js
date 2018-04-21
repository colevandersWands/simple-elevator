function s_e_handler_oop() {
	// retrieve user input and clean it
    var new_floor;
    var pre_new = document.getElementById("new-floor-oop").value;
    if (pre_new == '') {
        new_floor = undefined;
    } else {
        new_floor = pre_new;
    }


    // pass user input through logic
	simple_elevator_oop.press_butt(new_floor);
	var current_floor = simple_elevator_oop.get_current_level();
	var old_floor = simple_elevator_oop.get_old_level();

	// write output to dom
    var display_old = document.getElementById("old-floor-display-oop");
    display_old.innerHTML = old_floor;
    var display_current = document.getElementById("current-floor-display-oop");
    display_current.innerHTML = current_floor;
}