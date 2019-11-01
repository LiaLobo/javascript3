// documentacao da api do github  https://developer.github.com/v3/
// requisição na api pela url https://api.github.com
// fazer GET na rota /users com seu user ex: get em https://api.github.com/users/reprograma

// const url = 'http://api.giphy.com/v1/gifs/search?q=cat&api_key=dc6zaTOxFJmzC&limit=1&offset=0'

// async function burcarApi(url) {
//     const response = await fetch(url)

//     if (response.ok) {
//         const json = await response.json()
//         criarImagem(json.data)
//     } else {
//         console.error('não foi possível encontrar sua api')
//     }
// }
// // fetch(urlAPI)
//     // .then(response => response.json())
//     // .then(json => criarImagem(json.data))
//     // .catch(err => console.error(err))

// function criarImagem(array) {
//     const body = document.body
//     body.innerHTML = `
//         <img src=${array[0].images.original.url}>
//     `
// }

// burcarApi(url).catch(err => console.error(err))


//CÓDIGO COM TRATAMENTO DE ERRO
const url = 'http://api.github.com/users/LiaLobo'

async function burcarApi(url) {
    try {
        const response = await fetch(url)
        
        if (response.ok) {
            const json = await response.json()
            criarImagem(json.avatar_url)
        } else {
            const err = `${response.status}:${response.statusText}`
            criaErro(err)
        }
    } catch(error) {
        criaErro('Falha na requisisção da API')
    }
}
// fetch(urlAPI)
    // .then(response => response.json())
    // .then(json => criarImagem(json.data))
    // .catch(err => console.error(err))

function criarImagem(src) {
    const body = document.body
    body.innerHTML = `
        <img src=${src}>
    `
}

criaErro = erro => {
    document.body.innerHTML = `<h1> ${erro} </h1>`
}

burcarApi(url)