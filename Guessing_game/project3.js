/*Guess a number between 1 and 100.
The program will generate a secret number which will be hidden. Players need to guess the number by typing the number into a box (input element).
Initial score is 0. High Score is 0.
1. When there is no input, and user press check button, there is message showing no input.
2. When user put a wrong number, and user press check button, message shows it is too low or too high. There is a score starting from 10 and will be decreasing by 1 every time when user guessing a wrong number.
3. When user put a correct number, background color changes, the secret number shows, background with of secret number changes, and high score will be updated or remained the same.
Implement a game rest functionality, so that the player can make a new guess!
1. Select the element with the 'Play' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and 'secretNumber' variables
3. When user put a correct number, background color changes, the secret number shows, background with of secret number changes, and high score will be updated or remained the same.
Implement a game rest functionality, so that the player can make a new guess!
1. Select the element with the 'Play' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and 'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input fields
4. Also restore the original background color and number background width
 */

//console.log(document.querySelector('h1').textContent)
//document.getElementById('').textContent = "changed version bello"

let secretNumber = Math.floor(Math.random() * 101);
console.log(secretNumber);
let score = 10;
let highestScore = 0;
document.getElementById('checker').onclick = checkHowClose;
function checkHowClose() {
    let userInput = Number(document.getElementById('msg').value)

    if (userInput > secretNumber) {

        document.getElementById('Hintinput').textContent = "Value is Too High";
        score--;
        document.getElementById('points').textContent = `Points:${score}`;
    }
    else if (userInput < secretNumber) {
        document.getElementById('Hintinput').textContent = "Value is Too Low";
        score--;
        document.getElementById('points').textContent = `Points:${score}`;

    }
    else if (userInput == secretNumber) {
        document.querySelector('body').style.background = 'linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1))';
        document.querySelector('.therandom').style.background = 'red';
        document.getElementById('random').textContent = `${secretNumber}`;
        document.getElementById('Hintinput').textContent = "Correct Answer";
        if (highestScore < score) {
            highestScore = score;
            document.getElementById('High').textContent = `Highest Score: ${highestScore}`;
        }
        score = 10;
        document.getElementById('checker').style.pointerEvents = 'none';

    }
    if (score == 0) {
        document.getElementById('Hintinput').textContent = "You Lose!!";
        document.getElementById('checker').style.pointerEvents = 'none';
    }
}

document.getElementById('play').onclick = pageReset;
function pageReset() {
    secretNumber = Math.floor(Math.random() * 101);
    console.log(secretNumber, typeof secretNumber);
    score = 10;
    document.querySelector('body').style.background = 'linear-gradient(to top right, #e992e4, #e6db9d)';
    document.querySelector('.therandom').style.background = 'white';
    document.getElementById('random').textContent = `?`;
    document.getElementById('Hintinput').textContent = "No Input";
    document.getElementById('points').textContent = `Points:${score}`;
    document.getElementById('checker').style.pointerEvents = 'all';
}