const cardGenerator = (character) =>{
    let card = document.createElement('div')
    card.innerHTML = `
    <div class="card-image">
        <img src="${character.image}" alt="picture of ${character.name}">
    </div>            
    <div class="card-titles">
        <h1> ${character.name}</h1>
        <div style="display: flex; justify-content: space-between">
            <h2>${character.species.toUpperCase()}</h2>
            <span class="status-${character.status.toLowerCase()}">${character.status}</span>
        </div>
    </div>
    `;
    card.classList.add('card');
    return card;
}