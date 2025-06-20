const website = "https://frapollif.github.io/pet-adoption-data";

async function getPetsData() {
    const data = await fetch(`${website}/pets.json`);
    const petsdata = await data.json();
    return petsdata;
}

function Capitalize(race){
    return race[0].toUpperCase() + race.slice(1)
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
    anni = eta(pet.birthYear)
    if (anni == 0){
        age.textContent = "Newborn"
    } 
    else if(anni == 1){
        age.textContent = anni + " year old"
    }
    else{
        age.textContent = anni + " years old"
    }
    const race = clone.querySelector(".race")
    race.textContent = Capitalize(pet.species)
    const desc = clone.querySelector(".desc")
    desc.textContent = pet.description
    const button = clone.querySelector(".adopt-button")
    button.textContent = "Adotta " + pet.name
    button.setAttribute("href", `${website}/pets/${pet.id}/`)

    //aggiungiamo l'articolo al main
    wrapper.appendChild(clone)
    }
)
}

function eta(birthYear){
    const data = new Date()
    let CurrentYear = data.getFullYear()
    return CurrentYear - birthYear 
    }

displayPets()

const filterButtons = document.querySelectorAll("nav button")

function displayFilterAnimals(e){
    let petArticles = document.querySelectorAll("article")
    for (let index = 0;index < petArticles.length;index++){
        let petArticle = petArticles[index];

    const small = petArticle.querySelectorAll("animal-card-text small span")
    if (e.target.dataset.filter =="all") {
        petArticle.style.display = "flex"
    }
    else if (small[1].textContent != e.target.dataset.filter){
        petArticle.style.display = "none"
    }
    else{
        petArticle.style.display = "flex"
    }
    }
        
 }



filterButtons.forEach(button=>{
    button.addEventListener("click", (e) => {
    displayFilterAnimals(e)}
)
})
console.log(filterButtons)