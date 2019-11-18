var result = document.getElementsByClassName("result")[0];
var calResult = "";
var displayString = "";

function clearDisplay() {
    result.value = "";
    calResult = "";
    displayString = "";
}
function handleNumBtn(btnVal) {
    if ((displayString == calResult) && (calResult !== "")) {
        displayString = "";
    }
    displayString += btnVal;
    display();
}
function handleOperatorBtn(btnVal) {
    var lastChar = displayString.charAt(displayString.length - 1);
    if (!["+", "-", "*"].includes(lastChar)) {
        displayString += btnVal;
        display();
    }
}
function display() {
    result.value = displayString;
}
function opposite() {
    displayString = -1 * displayString + '';
    display();
}

function percent() {
    displayString = displayString / 100 + '';
    display();
}
function calculate() {
    if (displayString.includes("/0")) {
        calResult = "Error";
        result.value = calResult;
    } else {
        calResult = eval(displayString);
        result.value = Math.round(calResult * 1e10) / 1e10;
    }
    displayString = calResult + "";
}