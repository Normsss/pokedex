//1º crear función que llame a pokemones
const fetchPokemon = () => {


    //usar un método llamado FETCH (versión moderna para ejecutar requisiciones AJAX al browser 
    // (para hacer op asíncronas))
    const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}` //interpolación del id para desplegar todos los pokemones
    
    const pokemonPromises = []

    for(let i = 1; i <= 150; i++) {
    	pokemonPromises.push(fetch(getPokemonUrl(i)).then(response => response.json()))
    }

    
    Promise.all(pokemonPromises)
   
    	.then(pokemons => {
            
    		const optionPokemons = pokemons.reduce((accumulator, pokemon) => {
    			
    			accumulator += `<option id="selectedPokemon"  value="${pokemon.id}">${pokemon.id}. ${pokemon.name}</option>`
    			return accumulator
    		},  
                showDetails = () => { 
                    
                    
                    
                    pokemon = pokemons.map(pokemon => ({
                        name: pokemon.name,
                        id: pokemon.id,
                        image: pokemon.sprites["front_default"],
                        type: pokemon.types.map(type => type.type.name).join(", "),
                      }))
                
                    selectedPokemon = document.querySelector('#selectedPokemon')

                    pokemonHTMLString = pokemon.map(pokeman =>
                          ` <li class="card"> <img class="card-image" src="${pokeman.image}"/> <h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2> <p class="card-subtitle">Type: ${pokeman.type}</p> </li> `
                      )
                      .join(" ");  


                    const printDetails = document.querySelector("#demo")
    		        printDetails.innerHTML =  selectedPokemon//lo que va a decir el HTML
                  }
                  

                )

    		const select = document.querySelector(`[data-js="pokedex"]`)
    		select.innerHTML = optionPokemons

            
        
        })
        
        
        

        


    // //fetch usa la url como parámetro
    // fetch(url) //en este momento, podemos ver en consola-network cmd+R cómo ya tenemos datos de la api
    // 	.then(response => response.json()) //respuesta de la PROMISE, lo convertimos a JSON
    // 	.then(pokemon => { //segunda respuesta de promise
    // 		console.log(pokemon) //nos enseña los datos del pokemon indicado en URL
    // 	})


}
//llamado a la func
fetchPokemon()



















