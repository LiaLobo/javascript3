// function ensaboar() {
//     //Recebe dois parâmetros: resolve (que vai para o .then()) e o reject (que irá para o .catch())
//     return new Promise((resolve, reject) => {
//         console.log('começou a ensaboar')

//         setTimeout(() => {
//             resolve(console.log('terminou o ensaboamento'))
//         }, 5000)

//     })
// }

// function enxaguar() {
//     console.log('começou a enxaguar')

//     setTimeout(() => {
//         console.log('terminou o enxague')
//     }, 2000)
// }

function lavaLouca(callBackEnsaboa, callBackEnxague) {
    callBackEnsaboa().then(() => {
        callBackEnxague()

    })
}

//OUTRO EXEMPLO COM PROMISE ALL

function criaTexto(texto) {
    const div = document.querySelector('#root')
    div.innerHTML += `<h1>${texto}</h1>`
}

const sabao = true
const agua = true

function ensaboa() {
    return new Promise((resolve, reject) => {
        if (sabao) {
            setTimeout(() => {
                resolve('terminou de ensaboar')
            }, 5000);
        } else {
            reject('não consigo ensaboar')
        }
    })
}

function enxagua() {
    return new Promise((resolve, reject) => {
        if (agua) {
            setTimeout(() => {
                resolve('terminou de enxaguar')
            }, 2000)
        } else {
            reject('não consigo enxaguar')
        }
    })
}

// ensaboa()
//     .then(res => {
//         criaTexto(res)
//         enxagua()
//             .then(res2 => criaTexto(res2))
//             .catch(err2 => criaTexto(err2))
//     })
//     .catch(err => criaTexto(err))

Promise.all([ensaboa(), enxagua()])
    .then(resAll => resAll.forEach(res => criaTexto(res)))
    .catch(err => console.log(err))