//Write a function named checknumberslist which takes two lists of integers and checks 
//the numbers of the same index numbers whether they both are even or not. For checking 
//both even or not you can use the function written in the previous question.

//If you give these lists [2, 6, 18, 10, 3, 75] and [6, 19, 24, 12, 3, 87] then the output 
//should come like this.


function checknumberslist(list1,list2){
    if(list1%2===0 && list2%2===0){
        console.log("both are even")
    }
    else{
        console.log("both are not even")
    }
}
checknumberslist([2,6,18,10,3,75],[6,19,24,12,3,87])