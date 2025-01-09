const button = document.querySelector('.container button');
const jokeText = document.querySelector('.container p');
document.addEventListener('DOMContentLoaded', getJoke);

button.addEventListener('click', getJoke);

async function getJoke() {
  const jokeInfo = await fetch('https://icanhazdadjoke.com/', {
    headers: {
        'Accept': 'application/json'
    }
  });

  const jokeObj = await jokeInfo.json();
  jokeText.innerHTML = jokeObj.joke;
}