// [] iterar sobre o array e mostrar as três imagens usando for()
// [] iterar sobre o array e mostrar as três imagens usando for...of
// [] iterar sobre o array e mostrar as três imagens usando forEach

// const div = document.querySelector('#root')

// const request = new XMLHttpRequest()
// const url = './data/dados.json'

// request.onreadystatechange = pegaDados

// request.open('GET', url)
// request.send()

// function pegaDados() {
//     if (request.readyState === 4 && request.status === 200) {
//         //Aqui é solicitada a resposta do nosso requerimento
//         const response = request.response
//         //json é como um tradutor que transforma o que vem em texto para objeto. Assim conseguimos manipular
//         const json = JSON.parse(response)

//         //Aqui é dito para ser adicionado ao HTML, dentro do espaço que eu peguei, as imagens com suas respectivas sources (que é o caminho traduzido para o data e a imagem que estão dentro do arquivo dados.json)
//         div.innerHTML = `
//         <img src=${json.data[0].imagem}>
//         <img src=${json.data[1].imagem}>
//         <img src=${json.data[2].imagem}>
//         `
//         //OU para mantermos o que está no body e juntar com o que queremos criar podemos fazer
//         //const body = document.body
//         // body.innerHTML += `
//             //<img src=${json.data[0].imagem}>
//             //<img src=${json.data[1].imagem}>
//             //<img src=${json.data[2].imagem}>
//         //`
//     } else {
//         console.log('Errouuuu');
        
//     }
// }

const request = new XMLHttpRequest();
request.open('GET', url);
request.send();

// [] iterar sobre o array e mostrar as três imagens usando for()
// [] iterar sobre o array e mostrar as três imagens usando for...of
// [] iterar sobre o array e mostrar as três imagens usando forEach

const div = document.querySelector('#root')

const request = new XMLHttpRequest()
const url = './data/dados.json'

request.onreadystatechange = pegaDados

request.open('GET', url)
request.send()

function pegaDados() {
    if (request.readyState === 4 && request.status === 200) {
        //Aqui é solicitada a resposta do nosso requerimento
        const response = request.response
        //json é como um tradutor que transforma o que vem em texto para objeto. Assim conseguimos manipular
        const json = JSON.parse(response)
        const data = json.data
        criarImgs(data)
        // criarImgsFor(data)
        // criarImgsForEach(data)
        // criarImgsForOf(data)

        //OUTROS TIPOS DE FOR

        //FOR NORMAL:
        // function criarImgsFor(array) {
        //     for (let i = 0; i < array.length; i++) {
        //         const element = array[i]
        //         const img = `<img src=${element.imagem}>`
        //         div.innerHTML += img
        //     }
    
        // }

        //FOR EACH:
            //function criarImgsForEach(array) {
                // array.forEach(element => {
                //     console.log(element)
                //     const img = `<img src=${element.imagem}`
                //     div.innerHTML += img
            // });
        //}

        //FOR OF:
            //function criarImgsForOf(data) {
                //for (const posicao of data) {
                //     const img = `<img src=${posicao.imagem}>`
                //     div.innerHTML += img
            // }
        //}

        function criarImgs(array) {     
            //Aqui é dito para ser adicionado ao HTML, dentro do espaço que eu peguei, as imagens com suas respectivas sources (que é o caminho traduzido para o data e a imagem que estão dentro do arquivo dados.json)
            div.innerHTML = `
            <img src=${array[0].imagem}>
            <img src=${array[1].imagem}>
            <img src=${array[2].imagem}>
            `
        }

        //OU para mantermos o que está no body e juntar com o que queremos criar podemos fazer
        //const body = document.body
        // body.innerHTML += `
            //<img src=${json.data[0].imagem}>
            //<img src=${json.data[1].imagem}>
            //<img src=${json.data[2].imagem}>
        //`
    } else {
        console.log('Errouuuu');
        
    }
}