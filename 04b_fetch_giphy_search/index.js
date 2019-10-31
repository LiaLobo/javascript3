// fetch da imagem
// [] adicionar a tag <script> no html
// [] verificar se está lendo index.js
// [] usar o endpoint de busca
// [] usar o método fetch() para a url da API Giphy
// [] transformar o dado recebido
// [] apresentar <img>

const input = document.querySelector('#gifInput')
const btn = document.querySelector('#gifButton')
const div = document.querySelector('#root')

btn.addEventListener('click', (e) => fazerFetch(e))

function fazerFetch (e) {
    e.preventDefault()
    const valorInput = input.value
    const url = `http://api.giphy.com/v1/gifs/search?q=${valorInput}&api_key=dc6zaTOxFJmzC&limit=5&offset=0`

    div.innerHTML = '' 
    
    //O fetch() já entende que o open do XMLHttpRequest é GET. Tem dois métodos: .then() que é onde colocamos a função de resolução de quando vier a resposta e
        //temos o .catch() que é para o erro. Quando a resposta não funciona é nele que trazemos a mensagem de erro.
    fetch(url)
        .then(response => response.json())
        .then(json => mostraResultado(json))
        .catch(erro => console.error(erro))
 }

function mostraResultado(json) {
    const arr = json.data

    arr.forEach(element => {
        const caminhoImg = element.images.original.url
        div.innerHTML += `
            <img src=${caminhoImg}>
        `
    });
    
}