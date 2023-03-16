const fetchJoke = () => {
  const joke = document.querySelector('#joke');

  fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json',
    },
  })
    .then(response => response.json())
    .then(data => {
      if (joke) {
        joke.innerHTML = data.joke;
      } else {
        console.log(data.joke);
      }
    })
    .catch(error => console.error(error));
};
