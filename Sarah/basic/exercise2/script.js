function ageCalculator(currentYear, birthYear) {

var ageX = currentYear - birthYear;
var ageY = (currentYear - birthYear) - 1;

var message = "You are either " + ageY + " or " + ageX + " .";

document.write(message);

}

ageCalculator(2020, 1993);