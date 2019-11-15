var result = document.getElementsByClassName("result")[0];
var calResult = "";
var tempString = "";

function clr() {
    result.value="";
    calResult= "";
    tempString = "";
}
function buttonNumber(btnVal) {
    var position = tempString.length -1;
    var lastValue = tempString.substr(position);
    //下一次轮输入数字时清空上一轮结果。
    if ((tempString == calResult) && (calResult !== "")) {
        tempString = "";
        tempString += btnVal;
    } else if ((lastValue == '/') && (btnVal == '0')) {
    //被除数不能为零。
        tempString += btnVal;
        calResult = "Error";
    }
    else {
        tempString += btnVal;
    }
    result.value = tempString;  
}
function buttonOperator(btnVal) {   
    var position = tempString.length -1;
    var lastValue = tempString.substr(position);
    var operatorCheck = "+-*/.";
    var checkLastValue = operatorCheck.indexOf(lastValue);
    //不连续输入两个运算符。
    if (checkLastValue !== -1) {
        return tempString;
    } else {
        tempString += btnVal;
    }
    result.value = tempString;
}
function opposite() {
    tempString = -1*tempString + '';
    calResult = tempString;
    result.value = tempString;
}
function percent() {
    tempString = tempString/100 + '';
    calResult = tempString;
    result.value = tempString;
}
function calculate() {
    if (calResult !== "Error") {
        calResult = eval(tempString);
        result.value = Math.round(calResult*1e10)/1e10;
    } else {
        result.value = calResult;
    }  
    tempString = calResult + '';
}