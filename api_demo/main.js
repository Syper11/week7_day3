const getPokemonInfo = async (event) => {
    event.preventDefault();

    const pokemon = event.target.pokemon.value;
    const urlName = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

    const res = await fetch(urlName);
    
    const data = await res.json();
    

    const name = data['name'];
    const id = data.id;
    const imgUrl = data.sprites.front_shiny;
    const ability = data.abilities[0].ability.name
    const ability1 = data.abilities[1].ability.name

  

    const myData = {
        name: name,
        id: id,
        imgUrl: imgUrl,
        ability: ability,
        ability1: ability1
    
    }

    addToPage(myData)
    
};
const addToPage = (specs) => {
    console.log(specs)
    const card = document.createElement('div')
    card.innerHTML =`
    <div class="card" style="width: 18rem;">
    <img src="${specs.imgUrl}" class="card-img-top" alt="${specs.name}">
    <div class="card-body">
        <h5 class="card-title">${specs.name}</h5>
        <h5 class="card-title">attack: ${specs.ability}</h5>
        <h5 class="card-title">attack: ${specs.ability1}</h5>
       
    </div>
    </div>
    `
    const container = document.querySelector('.container');
    if (container.innerHTML !== ''){
        container.innerHTML = ''
    }
    container.append(card)
};

const myForm = document.getElementById('myForm');
myForm.addEventListener('submit', getPokemonInfo)