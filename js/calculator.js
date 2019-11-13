var result = document.getElementById("result");
var calResult;
var tempString = "";
function clr() {
    result.value="";
    calResult= "a";
    tempString = "";
}
function display(clickVal) {
    var pos, lastValue;
    pos = tempString.length -1;
    lastValue = tempString.substr(pos);
    if (clickVal == '+' || clickVal == '-' || clickVal == '*' || clickVal == '/') {
        switch(lastValue) {
            case "": case '1': case '2':  case '3': case '4': case '5': case '6': 
            case '7': case '8': case '9': case '0':
                tempString +=clickVal;
                break; 
            default: 
                return tempString;
        }
    }else if(tempString == calResult) {
        tempString = '';
        tempString +=clickVal;
    }
    else{
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