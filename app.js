
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

async function fetchData() {
    try {
        
        // pokemon
        var response = await fetch(`https://pokeapi.co/api/v2/pokemon/${getRandomInt(1025)}`);

        if(!response.ok) {
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const pokemonName = data.name;
        const inputElement = document.getElementById("pokemonName");
        inputElement.style.display = "block";
        document.getElementById("pokemonName").value = pokemonName;

        const imgElement = document.getElementById("pokemonSprite")
        //console.log(imgElement);
        imgElement.src = pokemonSprite;
        imgElement.style.display ="block";


        // Chuck norris
        var response2 = await fetch(`https://api.chucknorris.io/jokes/random`);
        const data2 = await response2.json();
        const joke = data2.value;

        const pElement = document.getElementById("chuckQuote");
        pElement.innerHTML = 'Once Chuck Norris said : <br>"'+ joke +'"';


    }
    catch(error) {
        console.error(error);
    }
}
fetchData();
let myInterval = setInterval(fetchData, 5000);