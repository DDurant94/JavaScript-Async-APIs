async function fetchMarvelCharacter(characterLi){
  try{
    const response = await fetch(`http://gateway.marvel.com/v1/public/characters`);
    const marvelData = await response.json();
    callback(null,marvelData);

  } catch(error) {
    callback(error,null);
  }

}

document.addEventListener("DOMContentLoaded", async () => {
  const characterData = await fetchMarvelCharacter(characterSelected);
  const characterInfoElement = document.getElementById("character-list");

  characterData.forEach( character => {
    const characterLi = document.createElement("li");
    characterLi.innerHTML = `
    <h3>${character.title}</h3>
    `;
    console.log(characterLi)
    characterInfoElement.appendChild(characterLi)
  });

  // characterInfoElement.innerHTML = `
  
  // `;
})