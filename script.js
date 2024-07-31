const joke = document.querySelector('#joke'),
      button = document.querySelector('button')

async function getJoke(){
       let jokeAPI = await fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single')
       jokeAPI = await jokeAPI.json()
       
       joke.innerHTML = jokeAPI.joke

}
getJoke()




