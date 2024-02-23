
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

async function fetchData() {
    try {
        
        //const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        var response = await fetch(`https://pokeapi.co/api/v2/pokemon/${getRandomInt(1025)}`);

        if(!response.ok) {
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite")
        console.log(imgElement);
        imgElement.src = pokemonSprite;
        imgElement.style.display ="block";
    }
    catch(error) {
        console.error(error);
    }
}

let myInterval = setInterval(fetchData, 2000);