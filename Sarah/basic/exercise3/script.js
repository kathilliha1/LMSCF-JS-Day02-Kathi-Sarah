function ageCalculator(birthYear) {

currentYear = new Date().getFullYear();
var ageX = currentYear - birthYear;
var ageY = (currentYear - birthYear) - 1;

var message = "You are either " + ageY + " or " + ageX + " .";

document.write(message);

}

ageCalculator(1993);