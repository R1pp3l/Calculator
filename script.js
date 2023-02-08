const buttons = document.querySelectorAll('button');
const display = document.querySelector('#display');
const equal = document.querySelector('#equals');
const clears = document.querySelector('#clear');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        if ( button.innerText !== "=" && button.innerText !== "C") {
            display.innerText += this.innerText;
        }
    });
});

clears.addEventListener('click', function() {
    display.innerText = "";
})

