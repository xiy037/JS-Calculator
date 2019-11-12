var result = document.getElementById("result");
var Num1 = 0, Num2 = 0, Operator = "";
//输入数字时调用函数inputItem，将数字进行存储和显示
 function inputItem(myVal) {
 if (Operator == ""){
  Num1 = Num1*10 + myVal;
  result.value = Num1;
 }else{
   Num2= Num2*10 + myVal;
   result.value = Num2;  
 }
}
//储存运算符，不显示
function inputOperator(myOpr){
    Operator = myOpr;
}
//进行常规运算并显示结果，结果赋值并用于下一轮运算
function doCalculation() {
   var calResult;
   calResult = eval(Num1+Operator+Num2);
   result.value =calResult;
   Num1 = calResult;
   Num2 = 0;
 }
//清空所有显示以及变量，尤其注意运算符清零
 function clr(){
    result.value=null;
    Num1 = 0;
    Num2 = 0;
    Operator = "";
 }

 function doMathAbs(){
    Num1 = -1*Num1
    result.value = Num1
  }
  
 function doMathPercent(){
    Num1 = Num1/100
    result.value = Num1
  }