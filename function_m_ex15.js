//What is the output of the following program?

function insertingElement(arr){
    var a=5;
    arr.push(a);
    return arr;
    console.log(arr);
}
console.log(insertingElement([1,2,3,4]));


//Note:
//Notice that the line console.log(arr) in the above example will not 
//print anything as the function stops executing after the return statement.