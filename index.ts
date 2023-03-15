const fetchJoke = () => {
  fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json',
    },
  })
    .then(response => response.json())
    .then(data => console.log(data.joke))
    .catch(error => console.error(error));
};

const nextJokeButton = document.querySelector('#next-joke-button');
nextJokeButton.addEventListener('click', fetchJoke);
