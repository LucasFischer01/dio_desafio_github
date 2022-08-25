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
        if (currentNumber > 0) {
            currentNumberWrapper.style.color = ' rgb(39, 204, 67)'
        }
        else if( currentNumber === 0){
            currentNumberWrapper.style.color = 'whitesmoke'
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
    if (currentNumber < 0) {
        currentNumberWrapper.style.color = ' rgb(206, 53, 53)'
    }
    else if( currentNumber === 0){
        currentNumberWrapper.style.color = 'whitesmoke'
    }
}
