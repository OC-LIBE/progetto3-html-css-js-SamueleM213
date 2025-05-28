const website = "https://frapollif.github.io/pet-adoption-data";

async function getPetsData() {
    const data = await fetch(`${website}/pets.json`);
    const petsdata = await data.json();
    return petsdata;
}

async function displayPets(){
    const pets = await getPetsData(); 
    const template = document.querySelector("#animal-card-template");
    const wrapper = document.querySelector("main")
    
    pets.forEach(pet => {
    const clone = template.content.cloneNode(true) 
    
    const image = clone.querySelector(".animal-card-photo img")
    image.src = pet.photo;
     const name = clone.querySelector(".name")
     name.textContent = pet.name
     const age = clone.querySelector(".age")
     age.textContent = toString(2025 - Number(pet.birthYear))
     const race = clone.querySelector(".race")
     race.textContent = pet.species
     const desc = clone.querySelector(".desc")
     desc.textContent = pet.description
    
    //aggiungiamo l'articolo al main
    wrapper.appendChild(clone)
    }
)
}

displayPets()

