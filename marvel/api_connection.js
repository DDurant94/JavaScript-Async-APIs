async function fetchMarvelCharacter(character){
  try{
    const response = await fetch(`https://gateway.marvel.com:443/v1/public/characters?name=${character}&orderBy=name&ts=1721929446898&apikey=6ff4859c9f07b04770921cd2eae2b91c&hash=7e91063979f9c9e893ef49c91351f283`);
    const marvelData = await response.json();
    console.log(marvelData);
    return marvelData
  } catch(error) {
    console.log(`Error: ${error}`);
  }

}

document.addEventListener("DOMContentLoaded", async () => {
  try{
    const characterData = await fetchMarvelCharacter(CharacterSearch);
    const characterInfoElement = document.getElementById("character-section-container");
    let character= characterData.data.results[0];
    const characterDiv = document.createElement("div");
    characterDiv.innerHTML = `
    <div id="character-card">
  
      <div id="character-img-container">
        <img id="character-img" src="${character.thumbnail['path']+'.'+character.thumbnail['extension']}" alt="Super Hero Image" style="width: 300px; height: auto;">
      </div>
  
      <div id="character-name-container">
        <h3 id="character-name">${character.name}</h3>
      </div>
  
      <div id="character-description-container">
        <p id="character-description">${character.description}</p>
      </div>
  
      <footer id="attribute-container">
        <p>${characterData.attributionText}</p>
      </footer>
  
    </div>`;
    characterInfoElement.appendChild(characterDiv)
  } catch(error) {
    console.log(`Error: ${error}`)
  }
})

document.getElementById('character-select-form').addEventListener("submit", function(event){
  event.preventDefault();
  const CharacterSearch = document.getElementById('character-search').value;
  document.getElementById('character-select-form').reset()
})