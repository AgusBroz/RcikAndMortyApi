const cardSection = document.getElementById('card-section')
const API_URL = 'https://rickandmortyapi.com/api/character/'
let apiPage = '?page=:page'
//+apiPage.replace(':page',2)
const rickandMortyData = async (page) =>{
    const {results} = await fetchData(API_URL+apiPage.replace(':page',page))
    results.map(character=> {
        const card=cardGenerator(character)
        cardSection.appendChild(card)
    })
}

(async function(){
    let {info} = await fetchData(API_URL);
    for(let i=1; i<= info.pages ; i++)
        rickandMortyData(i)
})();