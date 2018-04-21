function render_oop_component(container) {
	// get main container from dom
	var s_e_container = document.getElementById(container);

	// build sub-components
	// header
	var s_e_header = document.createElement("h2");
	s_e_header.innerHTML = "Object Oriented Elevator";

	// instructions div
	var s_e_instructions = document.createElement("p");
	s_e_instructions.innerHTML = "Page loads at floor 0, enter the floor you want to go to.";
		var s_e_restrictions = document.createElement("p");
	s_e_restrictions.innerHTML = "(psst.  There are only 4 floors -> 0, 1, 2, 3)";
	var s_e_instructions_container = document.createElement("div");
	s_e_instructions_container.appendChild(s_e_instructions);
	s_e_instructions_container.appendChild(s_e_restrictions);

	// input div
	var s_e_new_floor = document.createElement("input");
	s_e_new_floor.setAttribute("id", "new-floor-oop");

	// button
	var s_e_button = document.createElement("button");
	s_e_button.setAttribute("id", "elevate-oop");
	s_e_button.setAttribute("class", "customButtons");
	s_e_button.innerHTML = "Elevate!";

	// display container div
	var s_e_description_current = document.createElement("p");
	s_e_description_current.innerHTML = "current floor: ";

	var s_e_display_current = document.createElement("p");
	s_e_display_current.setAttribute("id", "current-floor-display-oop");

	var s_e_description_old = document.createElement("p");
	s_e_description_old.innerHTML = "old floor: ";

	var s_e_display_old = document.createElement("p");
	s_e_display_old.setAttribute("id", "old-floor-display-oop");

	var s_e_display_container = document.createElement("div");
	s_e_display_container.appendChild(s_e_description_current);
	s_e_display_container.appendChild(s_e_display_current);
	s_e_display_container.appendChild(s_e_description_old);
	s_e_display_container.appendChild(s_e_display_old);

	// build it all together
	s_e_container.appendChild(s_e_header);
	s_e_container.appendChild(s_e_instructions_container);
	s_e_container.appendChild(s_e_new_floor);
	s_e_container.appendChild(s_e_button);
	s_e_container.appendChild(s_e_display_container);

	// attach event listeners
	s_e_button.addEventListener("click", s_e_handler_oop);
}

render_oop_component("simple-elevator-oop");

