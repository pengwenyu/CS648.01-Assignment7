//STEP 1
function halfNumber(value){
    window.console.log('Half of '+value+' is '+value/2);
    return value/2;
} 
//STEP 2
function squareNumber(value) {
    window.console.log('The result of squaring the number '+value+' is '+value*value);
    return value*value;
}
//STEP 3
function percentOf(value1,value2){
    window.console.log(value1+' is '+value1/value2*100+'% of'+value2);
    return value1/value2*100+'%';
} 
//STEP 4
function findModulus(value1,value2) {
    window.console.log(value2%value1+' is the modulus of '+value1+' and '+value2);
    return value2%value1;
}
halfNumber(5);
squareNumber(3);
percentOf(2,4);
findModulus(4,10);
//STEP 5
function displayTitle(){
    window.alert("welcome to sum game");
}
function playGame(){
    "use strict";
    var string1=window.prompt("Plaese enter some numbers delimited by commas");
    var numbers = string1.match(/\d+/g);
    window.console.log(numbers);
    var sum=0;
    for (var i=0;i<numbers.length;i++){
        sum=sum+parseInt(numbers[i]);
    }
    window.console.log(sum);
    return sum;
}
function main(){
    displayTitle();
    var playAgain="y";
    while(playAgain==="y"){
        playGame();
        playAgain=window.prompt("Do you want to try again(y/n)");
    }
    window.alert("Thanks for playing");
}

main();