// [x] instanciar XMLHttpRequest()
// [x] o que fazer depois que receber a resposta
// [x] fazer a requisição com open() e send()
// [x] tratar response

const div = document.querySelector('#root')
const img = document.createElement('img')

const request = new XMLHttpRequest()

//É feita a request e quando houver alteração de estado temos uma response 
request.onreadystatechange = getDados

function getDados() {
    //Fazer algo com a response

    if (request.readyState === 4 && request.status === 200) {
        const response = request.response
    
        const json = JSON.parse(response)
        const data = json.data
        const obj = data[0]
        const imgSrc = obj.imagem
        img.src = imgSrc
    } else {
        console.log(request.readyState, request.status)
    }
    
    div.appendChild(img)
}

const url = './data/dados.json'
request.open('GET', url)
request.send()
