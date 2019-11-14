var result = document.getElementById("result");
var calResult;
var tempString = "";
function clr() {
    result.value="";
    calResult= "a";
    tempString = "";
}
function display(clickVal) {
    var operatorCheck = '+-*/.';
    var pos = tempString.length -1;
    var lastValue = tempString.substr(pos);
    var checkClickVal = operatorCheck.indexOf(clickVal);
    var checkLastValue = operatorCheck.indexOf(lastValue);
    if ((checkClickVal !== -1) && (checkLastValue !== -1)) {
        return tempString;
    } else if ((checkClickVal == -1)&& (tempString == calResult)) {
        tempString = '';
        tempString +=clickVal;
    } else {
        tempString +=clickVal;
    } 
    result.value = tempString;
    if ((lastValue == '/') && (clickVal == '0')) {
        result.value = "Error";
    }
}
function opposite() {
    tempString = -1*tempString + '';
    result.value = tempString;
}
function percent() {
    tempString = tempString/100 + '';
    result.value = tempString;
}
function calculate() {
    calResult = eval(tempString);
    result.value = calResult;
    tempString = calResult + '';
}