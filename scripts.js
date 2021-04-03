//1º crear función que llame a pokemones
const fetchPokemon = () => {
  //usar FETCH (versión moderna para ejecutar requisiciones AJAX al browser
  // (para hacer op asíncronas))
  const getPokemonUrl = (id) => `https://pokeapi.co/api/v2/pokemon/${id}`; //interpolación del id para desplegar todos los pokemones
  const select = document.querySelector(`[data-js="pokedex"]`);
  const printDetails = document.querySelector("#demo");
  const pokemons = [];

  for (let i = 1; i <= 150; i++) {
    fetch(getPokemonUrl(i))
      .then((response) => response.json())
      .then((pokemon) => {
        pokemons.push(pokemon);
        select.innerHTML += `<option id="selectedPokemon"  value="${pokemon.id}">${pokemon.id}. ${pokemon.name}</option>`;
      });
  }

  showDetails = ({ value }) => {
    const selectedPokemon = pokemons.find((pokemon) => pokemon.id == value);

    const objectPokemon = {
      name: selectedPokemon.name,
      id: selectedPokemon.id,
      image: selectedPokemon.sprites["front_default"],
      type: selectedPokemon.types.map((type) => type.type.name).join(", "),
    };

    printDetails.innerHTML = `<div class="card"><img class="card-image" src="${objectPokemon.image}"/> <h2 class="card-title">${objectPokemon.id}. ${objectPokemon.name}</h2> <p class="card-subtitle">Type: ${objectPokemon.type}</p> </div>`; //lo que va a decir el HTML
  };

  // //fetch usa la url como parámetro
  // fetch(url) //en este momento, podemos ver en consola-network cmd+R cómo ya tenemos datos de la api
  // 	.then(response => response.json()) //respuesta de la PROMISE, lo convertimos a JSON
  // 	.then(pokemon => { //segunda respuesta de promise
  // 		console.log(pokemon) //nos enseña los datos del pokemon indicado en URL
  // 	})
};
//llamado a la func
fetchPokemon();
