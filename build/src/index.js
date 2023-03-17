"use strict";
const reportJokes = [];
let currentScore = 0;
let currentJoke;
let nextJoke;
const scores = document.getElementById('scores');
const score1Button = document.getElementById('score1');
const score2Button = document.getElementById('score2');
const score3Button = document.getElementById('score3');
const fetchJoke = () => {
    const jokeHTML = document.querySelector('#joke');
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            Accept: 'application/json',
        },
    })
        .then(response => response.json())
        .then(data => {
        if (scores) {
            scores.style.display = 'block';
        }
        if (jokeHTML) {
            jokeHTML.innerHTML = data.joke;
            currentJoke = nextJoke;
            // Add current Joke to reportJokes
            if (currentScore > 0) {
                reportJokes.push({
                    joke: currentJoke,
                    score: currentScore,
                    date: new Date().toISOString(),
                });
            }
            console.log(reportJokes);
            nextJoke = data.joke;
            currentScore = 0;
            if (score1Button && score2Button && score3Button) {
                score1Button.classList.remove('selected');
                score2Button.classList.remove('selected');
                score3Button.classList.remove('selected');
            }
        }
        else {
            console.log(data.joke);
        }
    });
};
if (score1Button && score2Button && score3Button) {
    score1Button.addEventListener('click', () => {
        currentScore = 1;
        score1Button.classList.add('selected');
        score2Button.classList.remove('selected');
        score3Button.classList.remove('selected');
    });
    score2Button.addEventListener('click', () => {
        currentScore = 2;
        score1Button.classList.remove('selected');
        score2Button.classList.add('selected');
        score3Button.classList.remove('selected');
    });
    score3Button.addEventListener('click', () => {
        currentScore = 3;
        score1Button.classList.remove('selected');
        score2Button.classList.remove('selected');
        score3Button.classList.add('selected');
    });
}
//# sourceMappingURL=index.js.map