// Controlador
async function fetchCharacters() {
  const res = await fetch('https://rickandmortyapi.com/api/character');
  const data = await res.json();
  showCharacters(data.results);
}

// Vista
function showCharacters(characters) {
  const container = document.getElementById('characters');
  container.innerHTML = '';

  characters.forEach(character => {
    const card = `
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <img src="${character.image}" class="card-img-top" alt="${character.name}">
          <div class="card-body">
            <h5 class="card-title">${character.name}</h5>
            <p class="card-text">Estado: ${character.status}</p>
          </div>
        </div>
      </div>
    `;
    container.innerHTML += card;
  });
}

fetchCharacters();
