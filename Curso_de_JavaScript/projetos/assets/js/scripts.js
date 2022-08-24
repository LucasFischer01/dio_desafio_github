var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function increment() {
    if (currentNumber < 10) {
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
    else {
        stop
    }
}

function decrement() {
    if (currentNumber > -10) {
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
    else {
        stop
    }
}








    




/*const changecolor = document.getElementById("currentNumber");
if (currentNumber < 0){
	document.getElementById("currentNumber").style.color = "red";
}*/