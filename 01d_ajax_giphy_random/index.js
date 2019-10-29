// fetch da imagem
// [x] adicionar a tag <script> no html
// [x] verificar se está lendo index.js
// [x] usar o método fetch() para a url da API Giphy
// [x] transformar o dado recebido
// [x] apresentar <img>
// [] usar async/await, then(), .catch(), arrow function


const imgGif = document.getElementById('imagem')
const body = document.body
const criaImg1 = document.createElement('img')
const criaImg2 = document.createElement('img')

const quero = 'batman'

//XMLHttpRequest do gif
const request = new XMLHttpRequest()
const urlRequest = `http://api.giphy.com/v1/gifs/search?q=${quero}&api_key=dc6zaTOxFJmzC&limit=3&offset=0`

request.onreadystatechange = mostraGif
request.open('GET', urlRequest)
request.send()

function mostraGif() {
    if (request.readyState === 4 && request.status === 200) {
        const response = request.response
        const json = JSON.parse(response)
        let gifUrl0 = json.data[0].images.original.url
        imgGif.src = gifUrl0

        let gifUrl1 = json.data[1].images.original.url
        criaImg1.src = gifUrl1
        body.appendChild(criaImg1)

        let gifUrl2 = json.data[2].images.original.url
        criaImg2.src = gifUrl2
        body.appendChild(criaImg2)

        //OU
        // body.innerHTML = `
        // <img src= ${json.data[0].images.original.url}
        // <img src= ${json.data[1].images.original.url}
        // <img src= ${json.data[2].images.original.url}
        // ` 
    
    } else {
        console.log('Falhou');
    }
    
}
