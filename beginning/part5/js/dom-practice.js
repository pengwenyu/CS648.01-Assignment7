/*eslint-env browser*/
/*
//STEP 1
function step1(){
    window.alert("I have been clicked");
}
//STEP 2
var value=document.getElementById("step2");
value.onclick =function(){
    window.alert("I have been clicked");
}
//STEP 3
var myButton=document.getElementById("step3");
function display(){
    "use strict";
    window.alert("I have been clicked");
}
myButton.addEventListener("click",display);
//STEP 4
var myButton=document.getElementById("step4");
myButton.addEventListener("click",function(){
    "use strict";
    window.alert("I have been clicked");
});
*/
//STEP 5
window.document.addEventListener("DOMContentLoaded",init,false);
function init(){
    var myButton=document.getElementById("step5");
    myButton.addEventListener("click",function(){
        "use strict";
        window.alert("I have been clicked");
    });
}
