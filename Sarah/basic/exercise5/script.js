function areaVolume (width, height, depth){

	var area = width * height;
	var volume = width * height * depth;

	var message1 = "The area of the box is: " + area; 
	var message2 = "The volume of the box is: " + volume;

	document.write(message1);
	document.write("<br>");
	document.write(message2);
}

areaVolume(5,5,5);