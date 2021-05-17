const getRandomId = () => {
  return Math.round(Math.random() * 150) + 1;
}

const getPokemon = async () => {
  const id = getRandomId();
  const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
  const result = await fetch(url);
  const pokemon = await result.json();
  // console.log(pokemon.sprites.other['official-artwork'].front_default);
  document.querySelector('#pokemon').style['-webkit-mask-image'] = `url(${pokemon.sprites.other['official-artwork'].front_default})`;
}

window.onload = () => {
  getPokemon();
}