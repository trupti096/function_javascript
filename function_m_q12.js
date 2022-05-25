//Write a function named addnumberslist which takes two lists as arguments and adds the 
//same position numbers and prints the sum of them.

//You can use the add_numbers function to add two numbers.

//If we have [50, 60, 10] and [10, 20, 13] and prints output like this.


function addnumberslist(list1,list2){
    for(var i=0;i<3;i++){
        console.log(list1[i]+list2[i]);
    }
}
addnumberslist([50,60,10],[10,20,13]);
