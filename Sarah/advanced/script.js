// exercise 1
function numberMinutes(){

	var minutes = document.getElementById("minutes").value;
	var maxHours = Math.floor(parseInt(minutes)/60);
	var maxHoursInMinutes = maxHours*60;
	var remainingMinutes = parseInt(minutes)-maxHoursInMinutes;

	document.getElementById("result").innerHTML = minutes + " minutes = " + maxHours + " hour(s) and " + remainingMinutes + " minute(s)."

}


// exercise 2
function yesterdayDate(){
	// gets date from ID 
	var date = document.getElementById("date").value;
	// creates new date variable with previous date value
	date = new Date(date);
	// overwrites date variable and sets previous date value -1
	date.setDate(date.getDate()-1);
	// displays yesterdays date and converts the unreadable date to a string
	document.getElementById("result").innerHTML = "Yesterday's date: " + date.toDateString();
}

// exercise 3
function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);
  
    document.body.style.background = bgColor;
    }

random_bg_color();