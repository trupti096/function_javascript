//What is the output of the following program?
 
function insertingElement(arr){
    var a=5;
    arr.push(a);
    return arr;
    console.log(arr);
}
console.log(insertingElement([1,2,3,4]));

//output= [1,2,3,4,5]