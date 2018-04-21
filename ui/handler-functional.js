function s_e_handler_functional() {
	// retrieve user input and clean it
    var old_floor; 
    var pre_old = document.getElementById("old-floor").value;
    if (pre_old == '') {
        old_floor = undefined; // try Number('') to see why I do this
    } else {
        old_floor = Number(pre_old);
    };

    var new_floor;
    var pre_new = document.getElementById("new-floor").value;
    if (pre_new == '') {
        new_floor = undefined;
    } else {
        new_floor = pre_new;
    }

    // pass user input through logic
	var result = simple_elevator(old_floor, new_floor);

	// write output to dom
    var display = document.getElementById("delta-floor");
    display.innerHTML = result;
}