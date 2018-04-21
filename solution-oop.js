let simple_elevator_oop = {
  old_level: 0,
  current_level: 0,
  press_butt: function(button){
	const possbileLevels = [0,1,2,3];

    if (!(possbileLevels.indexOf(Number(button)) < 0)) {
      let delta_level = Number(button) - this.current_level;
      let new_level = this.current_level + delta_level;
      if (!(possbileLevels.indexOf(new_level) < 0)) {
      	this.old_level = this.current_level;
        this.current_level = new_level
      }
    }
  },
  get_old_level: function() {
    return this.old_level;
  },
  get_current_level: function() {
    return this.current_level;
  }
};