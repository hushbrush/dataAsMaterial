
// fetch = Function used for making HTTP requests to fetch resources.
//              (JSON style data, images, files)
//              Simplifies asynchronous data fetching in JavaScript and
//              used for interacting with APIs to retrieve and send
//              data asynchronously over the web.
//              fetch(url, {options})


// STEP 1:
// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response =>console.log(response))
//     .catch(error=>console.log(error))


// STEP 2:
// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response =>response.json())
//     .then(data=>console.log(data))
//     .catch(error=>console.log(error))

// STEP 3(ERRORR):
fetch("https://pokeapi.co/api/v2/pokemon/not_a_pokemon")
    .then(response =>response.json())
    .then(data=>console.log(data))
    .catch(error=>console.log(error))

// FINAL: 

// async function fetchData(){

//     try{

//         const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

//         if(!response.ok){
//             throw new Error("Could not fetch resource");
//         }

//         const data = await response.json();
//         const pokemonSprite = data.sprites.front_default;
//         const imgElement = document.getElementById("pokemonSprite");

//         imgElement.src = pokemonSprite;
//         imgElement.style.display = "block";
//     }
//     catch(error){
//         console.error(error);
//     }
// }

