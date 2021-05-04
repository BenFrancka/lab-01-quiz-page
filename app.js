// import functions and grab DOM elements
import {countsAsYes} from './utils.js';

const quizButton = document.getElementById("quiz-button");
const resultsDisplay = document.getElementById("results-display");


// set event listeners to update state and DOM

quizButton.addEventListener('click', () => {
    //alert to start the quiz on user click of button
    alert('Welcome, weary traveler, to the Lord of the Rings Quiz');

    //confirm whether user wants to take quiz
    const yesQuiz = confirm('Do you want to delve down into the deep lore?');

    //if user says no, break out of quiz
    if (yesQuiz === false) {
        return;
    }

    //user first name input
    const firstName = prompt('Type First Name');
    //user clan name input
    const clanName = prompt('Type Clan Name');

    //launch first question prompt
    const firstAnswer = prompt('Was one of the rings given to the elves called Narya? (yes/no)');
    let score = 0;
    //if user answers correctly, add one point
    if(countsAsYes(firstAnswer)) {
        score++;
    }

    //launch second question prompt
    const secondAnswer = prompt('Was one of the Dwarven clans to receive a ring called Proudfoot? (yes/no)');

    //if user answers correctly, add one point
    if(!countsAsYes(secondAnswer)) {
        score++;
    }

    //launch third question prompt
    const thirdAnswer = prompt('Did the mortal men that recieved the rings become the Nazgul? (yes/no)');

    //if user answers correctly, add one point
    if(countsAsYes(thirdAnswer)) {
        score++;
    }

    //display quiz reults in the results-display div with the user's name and their score
    resultsDisplay.textContent = `Have a Pint, ${firstName} ${clanName}! You scored ${score} out of 3!`;

});