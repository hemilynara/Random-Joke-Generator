const jokeButton = document.getElementById('jokeButton');
const jokeDisplay = document.getElementById('jokeDisplay');

jokeButton.addEventListener('click', () => {
  fetch('https://v2.jokeapi.dev/joke/Any')
    .then(response => response.json())
    .then(data => {
      if (data.type === 'single') {
        jokeDisplay.textContent = data.joke;
      } else if (data.type === 'twopart') {
        jokeDisplay.textContent = `${data.setup} ${data.delivery}`;
      }
    })
    .catch(error => {
      jokeDisplay.textContent = 'Houve um erro ao buscar a piada. Tente novamente.';
    });
});
