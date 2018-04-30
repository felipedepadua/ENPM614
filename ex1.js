"use strict"; // https://www.w3schools.com/js/js_strict.asp 

var a; 
var b;
var d; 
var e = [1, 2, 3]; 
var f = [1, true, 'a']; 
var myName = 'Felipe';

function multiply(numerator, denumerator){
    return numerator * numerator;
}

var message; 
message = 'abc';
var endsWithC = message.concat('d'); 


var number = 1; 
var count = 1; 

function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    for (var j = 0; j < 5; j++) {
        console.log(j);
    }
    console.log('Finally: ' + i);
}
doSomething();


var doLog = function (message) {
    console.log(message);
};

var a = 0;
var b = 1;
if(a == 1){
    print("equal");
    alert("equal")
}
