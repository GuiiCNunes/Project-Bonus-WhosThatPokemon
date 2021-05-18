const getRandomId = () => {
  return Math.round(Math.random() * 150) + 1;
}

let pokemonName = 'none';
let pokemonImageUrl = '';

const getPokemon = async () => {
  try {
    const id = getRandomId();
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    const result = await fetch(url);
    // const result = await fetch(url);
    const pokemon = await result.json();
    pokemonName = pokemon.name;
    // console.log(pokemon.sprites.other['official-artwork'].front_default);
    pokemonImageUrl = `url(${pokemon.sprites.other['official-artwork'].front_default})`;
    document.querySelector('#pokemon').style['-webkit-mask-image'] = pokemonImageUrl;
    document.querySelector('#pokemon').style.backgroundColor = 'black';
    document.getElementById('guess-btn').disabled = false;
  } catch (error) {
    alert(error);
  }  
}

document.getElementById('guess-btn').addEventListener('click', () => {
  const guess = document.getElementById('guess-input').value.toLowerCase();
  const result = guess === pokemonName ? `You catch him!` : `${pokemonName} use teleport and disappear`;
  document.querySelector('#pokemon').style = ' ';
  document.querySelector('#pokemon').style.backgroundImage = pokemonImageUrl;
  alert(result);
  // document.location.reload(); // https://developer.mozilla.org/pt-BR/docs/Web/API/Location/reload
});

window.onload = () => {
  getPokemon();
}