// exercise 2

function sumAverage(){

	var math = document.getElementById("mathGrade").value;
	var english = document.getElementById("englishGrade").value;
	var physics = document.getElementById("physicsGrade").value;

	var sum = parseInt(math) + parseInt(physics) + parseInt(english);
	var average = sum/3;

	document.getElementById("result").innerHTML = "Sum: " + sum + "<br>Avg: " + average; 

}




document.write("<br><hr><br>")



// exercise 1
function anonymous(){
	var str = "kathi and Sarah are awesome!";
	var capital = str.charAt(0);
	var message = capital.toUpperCase() + "athi and Sarah are awesome!";

	document.write(message);
}

anonymous();

document.write("<br><hr><br>")