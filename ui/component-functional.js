function render_functional_component(container) {
	// get main container from dom
	var s_e_container = document.getElementById(container);

	// build sub-components
	// header
	var s_e_header = document.createElement("h2");
	s_e_header.innerHTML = "Functional Elevator";

	// instructions div
	var s_e_instructions = document.createElement("p");
	s_e_instructions.innerHTML = "Elevate! enter the current floor (number) and new floor (number)";
		var s_e_restrictions = document.createElement("p");
	s_e_restrictions.innerHTML = "(psst.  There are only 4 floors -> 0, 1, 2, 3)";
	var s_e_instructions_container = document.createElement("div");
	s_e_instructions_container.appendChild(s_e_instructions);
	s_e_instructions_container.appendChild(s_e_restrictions);

	// input div
	var s_e_old_floor = document.createElement("input");
	s_e_old_floor.setAttribute("id", "old-floor");
	var s_e_new_floor = document.createElement("input");
	s_e_new_floor.setAttribute("id", "new-floor");
	var s_e_input_container = document.createElement("div");
	s_e_input_container.appendChild(s_e_old_floor);
	s_e_input_container.appendChild(s_e_new_floor);

	// button
	var s_e_button = document.createElement("button");
	s_e_button.setAttribute("id", "elevate");
	s_e_button.setAttribute("class", "customButtons");
	s_e_button.innerHTML = "Elevate!";

	// display container div
	var s_e_display_explained = document.createElement("p");
	s_e_display_explained.innerHTML = "delta floor: ";
	var s_e_display = document.createElement("p");
	s_e_display.setAttribute("id", "delta-floor");
	var s_e_display_container = document.createElement("div");
	s_e_display_container.appendChild(s_e_display_explained);
	s_e_display_container.appendChild(s_e_display);

	// build it all together
	s_e_container.appendChild(s_e_header);
	s_e_container.appendChild(s_e_instructions_container);
	s_e_container.appendChild(s_e_input_container);
	s_e_container.appendChild(s_e_button);
	s_e_container.appendChild(s_e_display_container);

	// attach event listeners
	s_e_button.addEventListener("click", s_e_handler_functional);
}

render_functional_component("simple-elevator-functional");

