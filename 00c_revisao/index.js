// 1.
// [] adicionar a tag <script> no html
// [] verificar se está lendo index.js
// [] alterar cor de <body>
// [] escutar o clique do botão
// [] criar função de alterar a cor usando rgb()
// [] usar Math.random() e Math.floor()

// ------------------------------------------------------------------------
// 2. melhorando o código
// [] remover repetição de código
// [] anonymous function
// [] arrow function
// [] template string


// ------------------------------------------------------------------------
// 3. novas funcionalidades
// [] criar função que gera rgb(___, ___, ___)
// [] criar função que gera array
// [] usar spread
// [] callback
// [] promise

const pegaBody = document.querySelector('body')
//OU document.getElementByTagName('body) Porém assim retorna um array
//OU document.body
const btn = document.getElementById('trocaCor')

// let teste = document.body.button
// console.log(teste);  Não funciona

pegaBody.style.backgroundColor = 'purple'
btn.addEventListener('click', mudaBody)


class MudaCor {
    constructor() {

    this.r = this.geraNum(255)
    this.g = this.geraNum(255)
    this.b = this.geraNum(255)
    }
    geraNum(num) {
       return parseInt(Math.random() * num)
    }
    geraRGB() {
        return `rgb(${this.r}, ${this.g}, ${this.b})`
    }

}

function mudaBody() {
    const mudaC = new MudaCor()
    pegaBody.style.backgroundColor = mudaC.geraRGB()
}
