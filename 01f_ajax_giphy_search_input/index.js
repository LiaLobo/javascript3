// XMLHttpRequest na rota search capturando informação do input
// trazer 10 imagens
// apresentar as imagens na div #root

const pegaDiv = document.getElementById('root')
const pegaInput = document.getElementById('gifInput')
const pegaBtn = document.getElementById('gifButton')



pegaBtn.addEventListener('click', fazerDepoisDoClick)

function fazerDepoisDoClick(e) {
    e.preventDefault()
    const valorInput = pegaInput.value
    
    const minhaChave = 'dc6zaTOxFJmzC'
    const vaiSerBuscado = valorInput
    const url = `http://api.giphy.com/v1/gifs/search?api_key=${minhaChave}&q=${vaiSerBuscado}&limit=10`
    

    const request = new XMLHttpRequest
    request.open('GET', url)
    request.send()

    request.onreadystatechange = function respostaDaRequest() {
        if (request.readyState === 4 && request.status === 200) {
            const response = request.response
            //Json.parse(variavel): transforma texto para objeto do js. O parse é quem transforma quando recebe o JSON da variável que colocamos como parâmetro no parenteses
            const json = JSON.parse(response)
            

        } else {
            console.error('Não foi possível pegar a resposta');
            
        }
       
    }
    
}