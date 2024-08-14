const cards = document.getElementById("cards")
const form = document.getElementById("form");
const input = document.getElementById("name")
const fetchPokemon = async (pokemon) => {

    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIResponse.json();
    console.log(data.forms);
    return data;
}

const generatePokeCards = async ()=>{

    const pokemon = await fetchPokemon(`${input.value}`)
        cards.innerHTML += `
        <div class="pokeCard">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.game_indices[19].game_index}.gif">
            <p>${pokemon.forms[0].name}</p>
        </div>
        `
    
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    generatePokeCards();
});