function displayTitle(){
    window.alert("welcome to rock-paper-scissors game");
}
function playGame(){
    "use strict";
    var array=new Array("rock","paper","scissors");
    while(true){
        var string1=window.prompt("Plaese enter your choise");
        var flag=0;
        for(var i=0;i<array.length;i++){
            if (string1==array[i]){
                flag=1;
            }
        }
        if(flag==1){
            var number1=Math.random()*10;
            number1=Math.round(number1);
            var computer_choise;
            //change computer value
            if (number1%3==0){
                computer_choise="rock";
            }
            if (number1%3==1){
                computer_choise="paper";
            }
            if (number1%3==2){
                computer_choise="scissors";
            }
            //check user is rock and computer choise
            if(string1=="rock"&&computer_choise=="rock"){
                window.alert("tie,no one win!");
                return;
            }
            if(string1=="rock"&&computer_choise=="paper"){
                window.alert("Computer is paper and you are rock, computer win!");
                return;
            }
            if(string1=="rock"&&computer_choise=="scissors"){
                window.alert("Computer is scissors and you are rock, you win!");
                return;
            }
            //check user is paper and computer choise
            if(string1=="paper"&&computer_choise=="rock"){
                window.alert("Computer is rock and you are paper, you win!");
                return;
            }
            if(string1=="paper"&&computer_choise=="paper"){
                window.alert("tie,no one win!");
                return;
            }
            if(string1=="paper"&&computer_choise=="scissors"){
                window.alert("Computer is scissors and you are paper, computer win!");
                return;
            }
            //check user is scissors and computer choise
            if(string1=="scissors"&&computer_choise=="rock"){
                window.alert("Computer is rock and you are scissors, computer win!");
                return;
            }
            if(string1=="scissors"&&computer_choise=="paper"){
                window.alert("Computer is paper and you are scissors, you win!");
                return;
            }
            if(string1=="scissors"&&computer_choise=="scissors"){
                window.alert("tie,no one win!");
                return;
            }
        }else{
            window.alert("You enter a wrong choise,please enter again");
        }
    }
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