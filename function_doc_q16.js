//Function Expressions (Anonymous function)....

//Function Declaration

function getSum(num1,num2){
    var total = num1 + num2;
    return total;
}
console.log(getSum(5,6));

//output= 11


//Function Expressions

var getSum = function(num1,num2){
    var total = num1 + num2;
    return total;
}
console.log(getSum(5,10));   //output= 15

var sum = getSum(7,25);
console.log(sum);            //output= 32