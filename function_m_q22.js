//Write a function squaresofnumbers which takes a number as a parameter, 
//and runs a loop from 1 to the given number, and makes the number and 
//square of a number as key, value pair. See the example below.



function squaresOfNumbers(limit){
    var output={}
    for(var i=1;i<=limit;i++){
        output[i]=i*i
    }
    console.log(output);
}
squaresOfNumbers(20);