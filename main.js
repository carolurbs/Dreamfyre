let isBR = true
let language = 'português'
const langBtn = document.getElementById('lang-btn')
let imgUrl = "./Imagens/Thumbs/pt-br.svg"

loadLangs=()=>{
    langBtn.innerHTML = `<img src="${imgUrl}" alt="${language}">`

}
langBtn.addEventListener('click', () => {
    isBR = !isBR
    if (isBR) {
        language = 'português'
        imgUrl= "./Imagens/Thumbs/pt-br.svg"
    } else {
        language = 'english'
        imgUrl= "./Imagens/Thumbs/eng.svg"
    }
    return loadLangs()

})
loadLangs()