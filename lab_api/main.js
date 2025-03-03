
//tutorial by https://www.youtube.com/watch?v=37vxWr0WgQk&ab_channel=BroCode

// fetch = Function used for making HTTP requests to fetch resources.
//              (JSON style data, images, files)
//              Simplifies asynchronous data fetching in JavaScript and
//              used for interacting with APIs to retrieve and send
//              data asynchronously over the web.
//              fetch(url, {options})


// STEP 1:(JUST FETCHING DATA, AND CHECKING WHETHER THE API IS FUNCTIONAL):
// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response =>console.log(response))
//     .catch(error=>console.log(error))


// STEP 2:(CONVERTING RESPONSE TO JSON):
// fetch("https://pokeapi.co/api/v2/pokemon/Bulbasaur")
//     .then(response =>response.json())
//     .then(data=>console.log(data))
//     .catch(error=>console.log(error))

// STEP 3(SPECIFIC DATA BASED ON HEADERS):
// fetch("https://pokeapi.co/api/v2/pokemon/Bulbasaur")
//     .then(response => response.json())
//     .then(data=>console.log(data.moves))
//     .catch(error=>console.log(error))

// STEP 4(ERROR):
fetch("https://pokeapi.co/api/v2/pokemon/not_a_pokemon")
    .then(response => console.log(response))
    .then(data=>console.log(data.id))
    .catch(error=>console.log(error))



// STEP 4: 
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

