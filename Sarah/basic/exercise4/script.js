function conversion(degrees){

	var radians = degrees * (Math.PI/180);
	var message = "If user passes " + degrees + " degrees it should get the result of " + radians + " radians";

	document.write(message);
}

conversion(50);