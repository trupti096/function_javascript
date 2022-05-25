//Write a function named eligibleforvote which takes age as a parameter and prints 
//if he/she is eligible to vote or not. ( Consider minimum age of voting to be 18. )

//Example:

//If a user given age as less than 18 prints “not eligible “ or else if a user enters 18 
//or more than 18 prints “you are eligible”.


function eligibleforvote(age1,age2){
    if(age1>18){
        console.log("you are eligible for vote")
    }if(age2<18){
        console.log("you are not eligible not for vote")
    }
}
eligibleforvote(20,17)