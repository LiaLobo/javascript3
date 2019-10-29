// 1.
// [x] adicionar a tag <script> no html
// [x] verificar se está lendo index.js
// [x] alterar cor de <body>
// [x] escutar o clique do botão
// [x] criar função de alterar a cor usando rgb()
// [x] usar Math.random() e Math.floor() ou parseInt()

// const pegaBody = document.querySelector('body')

//OU document.getElementByTagName('body) Porém assim retorna um array
//OU document.body

// const btn = document.getElementById('trocaCor')

// let teste = document.body.button
// console.log(teste);  Não funciona

// pegaBody.style.backgroundColor = 'purple'

// btn.addEventListener('click', clicouBotao)

// function geraNum() {
    // const n =parseInt(Math.random() * 255)
    // return n
// }

// function clicouBotao() {
//     const r = geraNum()
//     const g = geraNum()
//     const b = geraNum()
//     pegaBody.style.backgroundColor = 'rgb(' + r + ' , ' + g +' , ' + b + ')'
// }

// ------------------------------------------------------------------------
// 2. melhorando o código
// [x] remover repetição de código
// [x] anonymous function
// [x] arrow function
// [x] template string

const pegaBody = document.querySelector('body')
//OU document.getElementByTagName('body) Porém assim retorna um array
//OU document.body
const btn = document.getElementById('trocaCor')

// let teste = document.body.button
// console.log(teste);  Não funciona

pegaBody.style.backgroundColor = 'purple'

//Isso é uma anonymus function, pois ela não é nomeada
btn.addEventListener('click', () => {
    const r = geraNum(255)
    const g = geraNum(255)
    const b = geraNum(255)
    pegaBody.style.backgroundColor = 'rgb(' + r + ' , ' + g +' , ' + b + ')'

    //TEMPLATE STRING= `rgb(${r}, ${g}, ${b})`
})

geraNum = numero => parseInt(Math.random() * numero)
