'use strict'

function yourName() {
    let name;
    do {
        name = prompt('What is my name?');
        console.log('try again');
    } while (name !== 'Brendan')

    return name;
}

function guessANumber() {
    let answer;

    do {
        answer = prompt('Guess a number between 1-10');
        if (answer != 3) {
            alert('try again!')
        } else {
            alert('you are correct!');
        }

    } while (answer != 3)
}

function timeOfDay() {
    let time = prompt('What time is it?'); // 15;
    let message = '';

    if (time <= 11) {
        message = 'Good Morning!';
    } else if (time <= 18) {
        message = 'Good Afternoon!';

    } else if (time <= 24) {
        message = "Good Evening!";
    } else {
        message = "Time does not exist!";
    }

    return message;
}
